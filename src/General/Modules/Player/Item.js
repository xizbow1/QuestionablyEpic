import { calcStatsAtLevel, getItemAllocations, getItemProp, getDomGemEffect } from "../../Engine/ItemUtilities";
import { CONSTRAINTS, setBounds } from "../../Engine/CONSTRAINTS";

// The Item class represents an active item in the app at a specific item level.
// We'll create them when we import a SimC string, or when an item is added manually.
// Items are stored in the players character. They are not currently stored in local storage but that is a likely addition soon after release.
class Item {
  constructor(id, name, slot, socket, tertiary, softScore = 0, level, bonusIDS) {
    this.id = id;
    this.name = name;
    this.level = setBounds(level, CONSTRAINTS.Retail.minItemLevel, CONSTRAINTS.Retail.maxItemLevel); //Math.max(1, Math.min(300, level));
    this.slot = slot;
    this.socket = socket;
    this.tertiary = tertiary === "Leech" || tertiary === "Avoidance" ? tertiary : "";
    this.softScore = softScore;
    this.uniqueHash = this.getUnique(id);
    this.bonusIDS = bonusIDS || "";
    this.stats = calcStatsAtLevel(this.level, getItemProp(id, "slot"), getItemAllocations(id), tertiary);
    this.effect = getItemProp(id, "effect");
    this.hasDomSocket = (getItemProp(id, "socketType") === "Domination");
    this.hasDomSet = (getItemProp(id, "socketType") === "Domination") || (slot === "Legs" && getItemProp(id, "sources")["instanceID"] === 1193);
    this.onUse = (slot === "Trinket" && getItemProp(id, "onUseTrinket") === true);
    if (this.onUse) this.effect['onUse'] = true;
  }

  id = 0; // The items ID
  level = 200; // The items ilvl
  name = ""; // Consider how to store this in a localised form.
  slot = "";
  softScore = 0;
  socket = false;
  tertiary = "";
  effect = "";
  uniqueHash = ""; // Technically not a hash.
  uniqueEquip = ""; // Unique Equip type if relevant.
  offhandID = 0; // Only used for correctly translating weapon combos.
  active = false;
  overriddenName = false; // If true, the effect will be used as the items name instead of its ID. So far this is just used for legendaries.
  vaultItem = false;
  isEquipped = false;
  source = {};
  hasDomSocket = false; // Has a domination socket.
  hasDomSet = false;  // Has a domination bonus. Leg slots will tick this, but not DomSocket. The rest will tick both.
  domGemID = 0;
  onUse = false;

  // The stats on the item. These should already be adjusted for item level.
  // HPS is a calculated field. It includes any item effects that provide healing or absorbs.
  stats = {
    intellect: 0,
    stamina: 0,
    haste: 0,
    mastery: 0,
    versatility: 0,
    crit: 0,
    leech: 0,
    hps: 0,
    dps: 0,
    bonus_stats: {
      intellect: 0,
      haste: 0,
      mastery: 0,
      versatility: 0,
      leech: 0,
      hps: 0,
    },
  };

  // To be replaced with a proper method of assigning ID's but this will do for now since duplicates will be very rare and
  // it isn't life crushing if they do ever dup.
  getUnique(id) {
    return id + "" + (Math.floor(Math.random() * 100000) + 1).toString();
  }

  getQualityColor() {
    const isLegendary = this.effect.type === "spec legendary";
    if (isLegendary) return "#ff8000";
    else if (this.level >= 183) return "#a73fee";
    else if (this.level >= 120) return "#328CE3";
    else return "#1eff00";

  }

  setDominationGem(id) {
    if (this.hasDomSocket) {
      this.domGemID = id;
      //this.effect = getDomGemEffect(id)
    }
  }

  addStats(bonus_stats) {
    for (var stat in this.stats) {
      if (stat in bonus_stats) {
        this.stats[stat] = this.stats[stat] + bonus_stats[stat];
      }
    }
  }
}

export default Item;
