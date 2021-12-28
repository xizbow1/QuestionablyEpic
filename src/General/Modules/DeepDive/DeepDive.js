import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Button, Dialog, DialogContent, Grid, TextField, FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getItemDB, getItemProp, getItemIcon } from "../../Engine/ItemUtilities";
import DeepDiveTable from "./DeepDiveTable";

const useStyles = makeStyles(() => ({
  formControl: {
    whiteSpace: "nowrap",
    width: "100%",
    // minWidth: 150,
  },
  formRegion: {
    whiteSpace: "nowrap",
    width: "100%",
    marginRight: 1,
  },
  textInput: {
    width: "100%",
  },
  option: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.23)",
  },
}));

export default function DeepDive(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const gameType = useSelector((state) => state.gameType);
  const [open, setOpen] = React.useState(false);
  const currentLanguage = i18n.language;

  const fillItems = (slotName, spec) => {
    let newItemList = [];
    const db = getItemDB(gameType);

    db.filter((key) => key.slot === "Trinket").map((key) => newItemList.push({ value: key.id, label: key.names[currentLanguage] }));

    newItemList.sort((a, b) => (a.label > b.label ? 1 : -1));
    return newItemList;
  };

  const [itemID, setItemID] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemLevel, setItemLevel] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [itemDropdown, setItemDropdown] = useState(fillItems("", props.player.spec)); // Filled later based on item slot and armor type.

  const [openAuto, setOpenAuto] = React.useState(false);
  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpenAuto(true);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 2) {
      setOpenAuto(true);
    } else {
      setOpenAuto(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemNameChanged = (event, val) => {
    if (val === null) {
      setItemID("");
      setItemName("");
    } else {
      setItemID(val.value);
      setItemName(val.name);
      if (gameType === "BurningCrusade") setItemLevel(getItemProp(val.value, "itemLevel", gameType));
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>open</Button>
      <Dialog maxWidth={"sm"} fullWidth={true} open={open} onClose={handleClose} BackdropProps={{ style: { backgroundColor: "rgba(82,82,82,0.9)" } }}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xl={1}>
              <div className="container-MiniItemCards">
                <a data-wowhead={"item=" + itemID + "&domain=" + currentLanguage}>
                  <img
                    alt="img"
                    width={38}
                    height={38}
                    src={getItemIcon(itemID, gameType)}
                    style={{
                      borderRadius: 4,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      //   borderColor: itemQuality,
                    }}
                  />
                </a>
                {/* <div className="bottom-right-ItemCards"> {item.level} </div> */}
              </div>
            </Grid>
            <Grid item xs={11} sm={11} md={6} lg={6} xl={11}>
              <FormControl className={classes.formControl} variant="outlined" size="small" fullWidth>
                <Autocomplete
                  size="small"
                  classes={{
                    option: classes.option,
                  }}
                  id="item-select"
                  // value={AutoValue}
                  onChange={(e, v) => itemNameChanged(e, v)}
                  options={itemDropdown}
                  openOnFocus={true}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) => option.label === value.label}
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  freeSolo
                  style={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} label={t("QuickCompare.ItemName")} variant="outlined" />}
                  // TODO: Fix option key error
                  // renderOption={(props, option) => {
                  //   return (
                  //     <Box component="li" {...props} key={option.id}>
                  //       {option.name}
                  //     </Box>
                  //   );
                  // }}
                  ListboxProps={{ style: { border: "1px solid rgba(255, 255, 255, 0.23)", borderRadius: 4, paddingTop: 0, paddingBottom: 0 } }}
                  open={openAuto}
                  onOpen={handleOpen}
                  onClose={() => setOpenAuto(false)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <DeepDiveTable />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
