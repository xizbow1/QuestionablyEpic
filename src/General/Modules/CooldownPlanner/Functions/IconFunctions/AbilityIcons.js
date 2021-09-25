import React from "react";
import { Divider, Typography, Tooltip } from "@material-ui/core";
import AuraMasteryIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/AuraMastery.jpg";
import AvengingWrathIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/AvengingWrath.jpg";
import DivineHymnIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/DivineHymn.jpg";
import EvangelismIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Evangelism.jpg";
import HealingTideTotemIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/HealingTideTotem.jpg";
import PowerWordBarrierIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/PowerWordBarrier.jpg";
import RevivalIcon from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/Revival.jpg";
import SalvationIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/Salvation.jpg";
import SpiritLinkTotemIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/SpiritLinkTotem.jpg";
import TranquilityIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Tranquility.jpg";
import TreeofLifeIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/TreeofLife.jpg";
import DivineTollIcon from "Images/Classes/Paladin/CovenantAbilities/DivineToll.jpg";
import AshenHallowIcon from "Images/Classes/Paladin/CovenantAbilities/AshenHallow.jpg";
import VanquishersHammerIcon from "Images/Classes/Paladin/CovenantAbilities/VanquishersHammer.jpg";
import BlessingOfSeasonsIcon from "Images/Classes/Paladin/CovenantAbilities/BlessingOfSeasons.jpg";
import KindredSpiritsIcon from "Images/Classes/Druid/CovenantAbilities/KindredSpirits.jpg";
import RavenousFrenzyIcon from "Images/Classes/Druid/CovenantAbilities/RavenousFrenzy.jpg";
import AdaptiveSwarmIcon from "Images/Classes/Druid/CovenantAbilities/AdaptiveSwarm.jpg";
import ConvokeTheSpiritsIcon from "Images/Classes/Druid/CovenantAbilities/ConvokeTheSpirits.jpg";
import BoonoftheAscendedIcon from "Images/Classes/Priest/CovenantAbilities/BoonoftheAscended.jpg";
import MindgamesIcon from "Images/Classes/Priest/CovenantAbilities/Mindgames.jpg";
import UnholyNovaIcon from "Images/Classes/Priest/CovenantAbilities/UnholyNova.jpg";
import FaeBlessingsIcon from "Images/Classes/Priest/CovenantAbilities/FaeBlessings.jpg";
import VesperTotemIcon from "Images/Classes/Shaman/CovenantAbilities/VesperTotem.jpg";
import ChainHarvestIcon from "Images/Classes/Shaman/CovenantAbilities/ChainHarvest.jpg";
import PrimordialWaveIcon from "Images/Classes/Shaman/CovenantAbilities/PrimordialWave.jpg";
import FaeTransfusionIcon from "Images/Classes/Shaman/CovenantAbilities/FaeTransfusion.jpg";
import WeaponsofOrderIcon from "Images/Classes/Monk/CovenantAbilities/WeaponsofOrder.jpg";
import FallenOrderIcon from "Images/Classes/Monk/CovenantAbilities/FallenOrder.jpg";
import BonedustBrewIcon from "Images/Classes/Monk/CovenantAbilities/BonedustBrew.jpg";
import FaelineStompIcon from "Images/Classes/Monk/CovenantAbilities/FaelineStomp.jpg";
import DarknessIcon from "Images/Classes/DemonHunter/DarknessIcon.jpg";
import RallyingCryIcon from "Images/Classes/Warrior/RallyingCryIcon.jpg";
import SpiritShellIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Talents/SpiritShellIcon.jpg";
import VampiricEmbraceIcon from "Images/Classes/Priest/Specialisation/Shadow/VampiricEmbrace.jpg";
import AntiMagicZoneIcon from "Images/Classes/DeathKnight/AntiMagicZone.jpg";
import PowerInfusionIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/PowerInfusion.jpg";
import IronbarkIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Ironbark.jpg";
import BlessingOfSacrificeIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/BlessingOfSacrifice.jpg";
import LifeCocoonIcon from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/LifeCocoon.jpg";
import FlourishIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Talents/FlourishIcon.jpg";
import AncestralProtectionIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/Talents/AncestralProtectionTotemIcon.jpg";
import GuardianSpiritIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/GuardianSpiritIcon.jpg";
import RaptureIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Rapture.jpg";
import PainSupression from "Images/Classes/Priest/Specialisation/Discipline/Icons/PainSupression.jpg";
import BlessingOfProtection from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_sealofprotection.jpg";
import BlessingOfFreedom from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_sealofvalor.jpg";
import LayOnHands from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_layonhands.jpg";
import TigersLust from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/ability_monk_tigerslust.jpg";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { classAbilityDB } from "Databases/ClassAbilityDB";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#525252",
    // color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[2],
    fontSize: 11,
  },
}))(Tooltip);

export default function AbilityIcons(props) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const ID = props.abilityID;
  const style = props.style;
  const localizedName = classAbilityDB
    .filter((obj) => {
      return obj.id === ID;
    })
    .map((obj) => obj.name[currentLanguage])
    .toString();
  const localizedCooldownText = classAbilityDB
    .filter((obj) => {
      return obj.id === ID;
    })
    .map((obj) => obj.cooldownText[currentLanguage])
    .toString();
  const localizedEffect = classAbilityDB
    .filter((obj) => {
      return obj.id === ID;
    })
    .map((obj) => obj.effectText[currentLanguage])
    .toString();

  let spell = "";
  let source = "";
  let alt = "";

  // Holy Paladin
  // Paladin Base Abilities
  if (ID === 31821) {
    spell = "spell=31821";
    source = AuraMasteryIcon;
    alt = "Aura Mastery";
  } else if (ID === 31884) {
    spell = "spell=31884";
    source = AvengingWrathIcon;
    alt = "Avenging Wrath";
  } else if (ID === 1022) {
    spell = "spell=1022";
    source = BlessingOfProtection;
    alt = "Blessing of Protection";
  } else if (ID === 1044) {
    spell = "spell=1044";
    source = BlessingOfFreedom;
    alt = "Blessing of Freedom";
  } else if (ID === 633) {
    spell = "spell=633";
    source = LayOnHands;
    alt = "Lay on Hands";
  }
  // Paladin Covenant Cooldowns
  else if (ID === 304971) {
    spell = "spell=304971";
    source = DivineTollIcon;
    alt = "Divine Toll";
  } else if (ID === 316958) {
    spell = "spell=316958";
    source = AshenHallowIcon;
    alt = "Ashen Hallow";
  } else if (ID === 328204) {
    spell = "spell=328204";
    source = VanquishersHammerIcon;
    alt = "Vanquisher's Hammer";
  } else if (ID === 328278) {
    spell = "spell=328278";
    source = BlessingOfSeasonsIcon;
    alt = "Blessing of the Seasons";
  }
  // Restoration Druid
  else if (ID === 740) {
    spell = "spell=740";
    source = TranquilityIcon;
    alt = "Tranquility";
  } else if (ID === 33891) {
    spell = "spell=33891";
    source = TreeofLifeIcon;
    alt = "Incarnation: Tree of Life";
  } else if (ID === 197721) {
    spell = "spell=197721";
    source = FlourishIcon;
    alt = "Flourish";
  }
  // Druid Covenant Cooldowns
  else if (ID === 326434) {
    spell = "spell=326434";
    source = KindredSpiritsIcon;
    alt = "Kindred Spirits";
  } else if (ID === 323546) {
    spell = "spell=323546";
    source = RavenousFrenzyIcon;
    alt = "Ravenous Frenzy";
  } else if (ID === 325727) {
    spell = "spell=325727";
    source = AdaptiveSwarmIcon;
    alt = "Adaptive Swarm";
  } else if (ID === 323764) {
    spell = "spell=323764";
    source = ConvokeTheSpiritsIcon;
    alt = "Convoke the Spirits";
  }
  // Holy Priest
  else if (ID === 265202) {
    spell = "spell=265202";
    source = SalvationIcon;
    alt = "Holy Word: Salvation";
  } else if (ID === 64843) {
    spell = "spell=64843";
    source = DivineHymnIcon;
    alt = "Divine Hymn";
  } else if (ID === 47788) {
    spell = "spell=47788";
    source = GuardianSpiritIcon;
    alt = "Guardian Spirit";
  }

  // Discipline Priest
  else if (ID === 62618) {
    spell = "spell=62618";
    source = PowerWordBarrierIcon;
    alt = "Power Word: Barrier";
  } else if (ID === 246287) {
    spell = "spell=246287";
    source = EvangelismIcon;
    alt = "Evangelism";
  } else if (ID === 109964) {
    spell = "spell=109964";
    source = SpiritShellIcon;
    alt = "Spirit Shell";
  } else if (ID === 47536) {
    spell = "spell=47536";
    source = RaptureIcon;
    alt = "Rapture";
  } else if (ID === 33206) {
    spell = "spell=33206";
    source = PainSupression;
    alt = "Pain Supression";
  }
  // Priest Covenant Abilities
  else if (ID === 325013) {
    spell = "spell=325013";
    source = BoonoftheAscendedIcon;
    alt = "Boon of the Ascended";
  } else if (ID === 323673) {
    spell = "spell=323673";
    source = MindgamesIcon;
    alt = "Mindgames";
  } else if (ID === 324724) {
    spell = "spell=324724";
    source = UnholyNovaIcon;
    alt = "Unholy Nova";
  } else if (ID === 327661) {
    spell = "spell=327661";
    source = FaeBlessingsIcon;
    alt = "Fae Blessings";
  }
  // Restoration Shaman
  else if (ID === 108280) {
    spell = "spell=108280";
    source = HealingTideTotemIcon;
    alt = "Healing Tide Totem";
  } else if (ID === 98008) {
    spell = "spell=98008";
    source = SpiritLinkTotemIcon;
    alt = "Spirit Link Totem";
  } else if (ID === 207399) {
    spell = "spell=207399";
    source = AncestralProtectionIcon;
    alt = "Ancestral Protection Totem";
  }

  // Shaman Covenant Abilities
  else if (ID === 324386) {
    spell = "spell=324386";
    source = VesperTotemIcon;
    alt = "Vesper Totem";
  } else if (ID === 320674) {
    spell = "spell=320674";
    source = ChainHarvestIcon;
    alt = "Chain Harvest";
  } else if (ID === 326059) {
    spell = "spell=326059";
    source = PrimordialWaveIcon;
    alt = "Primordial Wave";
  } else if (ID === 328923) {
    spell = "spell=328923";
    source = FaeTransfusionIcon;
    alt = "Fae Transfusion";
  }
  // Mistweaver Monk
  else if (ID === 115310) {
    spell = "spell=115310";
    source = RevivalIcon;
    alt = "Revival";
  }
  // Monk Covenant Abilities
  else if (ID === 310454) {
    spell = "spell=310454";
    source = WeaponsofOrderIcon;
    alt = "Weapons of Order";
  } else if (ID === 326860) {
    spell = "spell=326860";
    source = FallenOrderIcon;
    alt = "Fallen Order";
  } else if (ID === 325216) {
    spell = "spell=325216";
    source = BonedustBrewIcon;
    alt = "Bonedust Brew";
  } else if (ID === 327104) {
    spell = "spell=327104";
    source = FaelineStompIcon;
    alt = "Faeline Stomp";
  } else if (ID === 196718) {
    spell = "spell=196718";
    source = DarknessIcon;
    alt = "Darkness";
  } else if (ID === 97462) {
    spell = "spell=97462";
    source = RallyingCryIcon;
    alt = "Rallying Cry";
  } else if (ID === 15286) {
    spell = "spell=15286";
    source = VampiricEmbraceIcon;
    alt = "Vampiric Embrace";
  } else if (ID === 51052) {
    spell = "spell=51052";
    source = AntiMagicZoneIcon;
    alt = "Anti Magic Zone";
  } else if (ID === 10060) {
    spell = "spell=10060";
    source = PowerInfusionIcon;
    alt = "Power Infusion";
  } else if (ID === 102342) {
    spell = "spell=102342";
    source = IronbarkIcon;
    alt = "Ironbark";
  } else if (ID === 6940) {
    spell = "spell=6940";
    source = BlessingOfSacrificeIcon;
    alt = "Blessing of Sacrifice";
  } else if (ID === 116849) {
    spell = "spell=116849";
    source = LifeCocoonIcon;
    alt = "Blessing of Sacrifice";
  } else if (ID === 116841) {
    spell = "spell=116841";
    source = TigersLust;
    alt = "Tiger's Lust";
  } else if (ID === "" || ID === undefined) {
    return null;
  }

  return (
    // <a data-wowhead={spell}>
    <LightTooltip
      title={
        <React.Fragment>
          <div style={{ display: "inline-flex", padding: 4 }}>
            <img style={{ ...style }} src={source} alt={alt} />
            <div>
              <Typography color="inherit">{localizedName}</Typography>
              <div style={{ marginTop: -4 }}>{localizedCooldownText}</div>
            </div>
          </div>
          <Divider />
          <div style={{ marginTop: 4 }}>{localizedEffect}</div>
          {/* <b>{"some"}</b> <u>{"amazing content"}</u>. {"It's very engaging. Right?"} */}
        </React.Fragment>
      }
    >
      <img style={{ ...style }} src={source} alt={alt} />
    </LightTooltip>
    // </a>
  );
}
