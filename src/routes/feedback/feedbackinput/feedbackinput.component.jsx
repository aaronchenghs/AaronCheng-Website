import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
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
  const toggledLight = useSelector((state) => !state.toggleLight);
  //inputs states
  const [anon, toggleAnon] = useState(false);

  const checkboxColor = toggledLight ? "#62807d" : "#063b5f";

  const [nameValue, setNameValue] = useState("");
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const [messageValue, setMessageValue] = useState("");
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrowScreen = windowWidth <= 660;
  const textFieldWidth = isNarrowScreen ? "90%" : "60%";

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
              style={{ width: textFieldWidth }}
            />
          ) : (
            <ThemedTextField
              id="filled-search"
              label="Name"
              type="search"
              variant="filled"
              style={{ width: textFieldWidth }}
              onChange={handleNameChange}
            />
          )}
          {""}
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                size="small"
                style={{ color: checkboxColor }}
              />
            }
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
        <div className="postButtonContainer">
          <Button
            variant="contained"
            style={{
              width: "13%",
              margin: "8px",
              backgroundColor:
                messageValue === "" || (nameValue === "" && !anon)
                  ? toggledLight
                    ? ""
                    : "gray"
                  : undefined,
              opacity:
                messageValue === "" || (nameValue === "" && !anon)
                  ? 1
                  : undefined,
            }}
            onClick={submit}
            disabled={messageValue === "" || (nameValue === "" && !anon)}
          >
            Post
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default FeedbackInput;
