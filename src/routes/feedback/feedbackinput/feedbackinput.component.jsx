import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { createFeedbackDocument } from "../../../utils/firebase/firebase.utils";
import { messageGiven } from "../../../redux_manager/actions/messageGiven.action";
import { useDispatch } from "react-redux";

import "./feedbackinput.styles.scss";

const FeedbackInput = () => {
  const dispatch = useDispatch();

  //checkbox state
  const [anon, toggleAnon] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const [messageValue, setMessageValue] = useState("");
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  //on submit button click
  const submit = async () => {
    anon
      ? await createFeedbackDocument(" ", messageValue)
      : await createFeedbackDocument(nameValue, messageValue);
    dispatch(messageGiven);
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
              label="——"
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
              onChange={handleNameChange}
            />
          )}
          {""}
          <FormControlLabel
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Post Anonymously"
            onChange={() => toggleAnon(!anon)}
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
          required
          rows={4}
          variant="filled"
          style={{ width: "97%" }}
          onChange={handleMessageChange}
        />
        <Button
          variant="contained"
          style={{ width: "13%", margin: "8px" }}
          onClick={submit}
        >
          Post
        </Button>
      </Box>
    </div>
  );
};
export default FeedbackInput;