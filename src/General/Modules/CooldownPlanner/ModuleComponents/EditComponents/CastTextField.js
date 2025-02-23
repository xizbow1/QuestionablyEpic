import React from "react";
import { TextField } from "@mui/material";

export default function CastTextField(props) {
  return (
    <TextField
      error={RegExp("^([01]?[0-9]|2[0-3]):[0-5][0-9]$").test(props.value) || props.value === undefined ? false : true}
      inputProps={{
        pattern: "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
      }}
      size="small"
      placeholder="00:00"
      InputProps={{
        classes: {
          input: {
            fontSize: 12,
            textAlign: "center",
          },
        },
      }}
      value={props.value}
      sx={{ whiteSpace: "nowrap", width: "100%" }}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
