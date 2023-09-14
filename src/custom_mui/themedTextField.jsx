import * as React from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";

const lightModeText = "#62807d";
const darkModeText = "#dcdff1";

const darkModeInputBackground = "#063b5f";

export function ThemedTextField(props) {
  const toggledLight = useSelector((state) => !state.toggleLight);

  const themedTextFieldStyling = createTheme({
    components: {
      MuiTextField: {
        variants: [
          {
            props: { variant: "filled" },
            style: {
              ".MuiInputLabel-root": {
                color: toggledLight ? lightModeText : darkModeText,

                "&.Mui-focused": {
                  color: toggledLight ? lightModeText : darkModeText,
                },

                "&.Mui-error": {
                  color: "red",
                },

                "&.Mui-disabled": {
                  WebkitTextFillColor: "grey",
                },
              },

              ".MuiOutlinedInput-root": {
                color: toggledLight ? lightModeText : darkModeText,

                "&:hover": {
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: toggledLight ? lightModeText : "#123f5a",
                  },
                },

                "&.Mui-focused": {
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: toggledLight ? lightModeText : darkModeText,
                  },
                },

                "&.Mui-error": {
                  color: "red",
                },

                "&.Mui-disabled": {
                  WebkitTextFillColor: "grey",
                },
              },
            },
          },
        ],
        defaultProps: {
          size: "small",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderWidth: "2px",
            borderColor: toggledLight ? lightModeText : darkModeText,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.MuiFilledInput-root": {
              backgroundColor: toggledLight ? "" : darkModeInputBackground,
              "&:before": {
                borderBottom: `${toggledLight ? "1px" : "1px"} solid #4d4d4d`,
              },
              "&:after": {
                borderBottom: `${toggledLight ? "2px" : "1px"} solid ${
                  toggledLight ? lightModeText : darkModeText
                }`,
              },
            },
            "&.MuiFilledInput-root.Mui-focused": {
              backgroundColor: toggledLight ? "" : darkModeInputBackground,
            },
            "&.MuiFilledInput-root:hover": {
              backgroundColor: toggledLight ? "" : darkModeInputBackground,
            },
          },
          input: {
            color: toggledLight ? lightModeText : darkModeText,
            "&.Mui-disabled": {
              WebkitTextFillColor: "grey",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={themedTextFieldStyling}>
      <TextField {...props} value={undefined} />
    </ThemeProvider>
  );
}
