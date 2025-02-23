import React, { Component } from "react";
import { Typography, Grid, Dialog } from "@mui/material";
import CooldownPlanner from "../CooldownPlanner/ModuleComponents/CooldownPlanner.js";
import HealTeam from "../CooldownPlanner/ModuleComponents/HealTeamTable";
import ertEngine from "../FightAnalysis/Engine/ERTEngine";

class CooldownPlannerModule extends Component {
  constructor() {
    super();
    /* ----------------------- We bind the below functions to this Component. ----------------------- */
    // This means these functions can be passed as props to other components and they will return here rather than in the component they are sent to.
    this.ertEngine = ertEngine.bind(this);
    this.handleHealTeamClickOpen = this.handleHealTeamClickOpen.bind(this);

    /* ---------------------- We set our state for the cooldown Planner Module. --------------------- */
    this.state = {
      ertListTimeNoIcons: [],
      ertListBossAbility: [],
      ertListAbilityNoTimeIconsAll: [],
      ertListTimeIcons: [],
      ertListNoteIcons: [],
      ertListNoteNoIcons: [],
      healTeamDialogState: false,
      mitigatedChartDataNoCooldowns: [],
      unmitigatedChartDataNoCooldowns: [],
      cooldownlistcustom2: [],
    };
  }

  /* ---------------------------------- Heal Team Dialog Handlers --------------------------------- */
  handleHealTeamClickOpen = () => {
    this.setState({ healTeamDialogState: true });
  };

  handleHealTeamClose = () => {
    this.setState({ healTeamDialogState: false });
  };

  render() {
    return (
      <div
        style={{
          marginTop: 32,
        }}
      >
        <div style={{ margin: "20px 3% 20px 3%" }}>
          {/* ---------------------------------------------------------------------------------------------- */
          /*                                  Main Grid for the Component                                   */
          /* ---------------------------------------------------------------------------------------------- */}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" style={{ padding: "10px 10px 5px 10px" }} color="primary">
                {/* // TODO Translate */}
                Cooldown Planner
              </Typography>
            </Grid>

            {/* ----------------- Grid Container for the Heal Team Table and Cooldown Planner ---------------- */}
            <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={1}>
                <CooldownPlanner
                  update={this.ertEngine}
                  cooldownObject={this.state.cooldowns}
                  dataUpdateHandler={this.handleChangeDataCooldownPlanner}
                  ertDialogOpen={this.handleERTClickOpen}
                  healTeamDialogOpen={this.handleHealTeamClickOpen}
                  ertListTimeNoIcons={this.state.ertListTimeNoIcons}
                  ertListBossAbility={this.state.ertListBossAbility}
                  ertListAbilityNoTimeIconsAll={this.state.ertListAbilityNoTimeIconsAll}
                  ertListTimeIcons={this.state.ertListTimeIcons}
                  ertListNoteIcons={this.state.ertListNoteIcons}
                  ertListNoteNoIcons={this.state.ertListNoteNoIcons}
                />
              </Grid>
            </Grid>

            {/* ------------------------------------- Healer Team Dialog ------------------------------------- */}
            {/* ------------------- This is where you enter your healing team into the app. ------------------ */}
            <Dialog onClose={this.handleHealTeamClose} aria-labelledby="ERT-Dialog" open={this.state.healTeamDialogState} maxWidth="lg" fullWidth PaperProps={{ style: { minWidth: 300 } }}>
              <HealTeam />
            </Dialog>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CooldownPlannerModule;
