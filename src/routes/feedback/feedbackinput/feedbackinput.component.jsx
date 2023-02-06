import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import "./feedbackinput.styles.scss";

const FeedbackInput = () => {
  const [anon, toggleAnon] = useState(false);
  const handleCheckBox = () => {
    toggleAnon(!anon);
  };

  return (
    <div className="inputs-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="name-container">
          {anon ? (
            <TextField
              disabled
              id="filled-search"
              label="🐱‍👤"
              type="search"
              variant="filled"
              style={{ width: "40%" }}
            />
          ) : (
            <TextField
              id="filled-search"
              label="Name"
              type="search"
              variant="filled"
              style={{ width: "40%" }}
            />
          )}
          {""}
          <FormControlLabel
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Post Anonymously"
            onChange={handleCheckBox}
            style={{ color: "grey" }}
            sx={{
              color: grey,
              margin: "-5px",
            }}
          />
        </div>

        <TextField
          className="this"
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="filled"
          style={{ width: "97%" }}
        />
        <Button variant="contained" style={{ width: "13%", margin: "8px" }}>
          Post
        </Button>
      </Box>
    </div>
  );
};
export default FeedbackInput;
