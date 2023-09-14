import * as React from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";

const lightModeText = "#62807d";
const darkModeText = "#dcdff1";

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
                    borderColor: toggledLight ? lightModeText : darkModeText,
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
