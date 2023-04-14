import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemedTextField } from "../../../custom_mui/themedTextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { createFeedbackDocument } from "../../../utils/firebase/firebase.utils";
import { messageGiven } from "../../../redux_manager/actions/messageGiven.action";
import { useDispatch } from "react-redux";

import "./feedbackinput.styles.scss";

const FeedbackInput = () => {
  const dispatch = useDispatch();

  //inputs states
  const [anon, toggleAnon] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const [messageValue, setMessageValue] = useState("");
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };
  //

  //on submit button click
  const submit = async () => {
    //check anon checkbox
    anon
      ? await createFeedbackDocument(" ", messageValue)
      : await createFeedbackDocument(nameValue, messageValue);

    //reload feedback map
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
            <ThemedTextField
              disabled
              id="filled-search"
              label="——"
              type="search"
              variant="filled"
              style={{ width: "40%" }}
            />
          ) : (
            <ThemedTextField
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
              margin: "-5px",
            }}
          />
        </div>

        <ThemedTextField
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
          disabled={messageValue === "" || (nameValue === "" && !anon)}
        >
          Post
        </Button>
      </Box>
    </div>
  );
};
export default FeedbackInput;
