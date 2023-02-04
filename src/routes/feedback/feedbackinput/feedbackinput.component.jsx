import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

import "./feedbackinput.styles.scss";

const FeedbackInput = () => {
  return (
    <div className="inputs-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-search"
            label="Name"
            type="search"
            variant="filled"
          />{" "}
        </div>
        <div>
          <TextField
            id="filled-multiline-static"
            label="Feedback"
            multiline
            rows={4}
            variant="filled"
          />
        </div>
      </Box>
    </div>
  );
};
export default FeedbackInput;
