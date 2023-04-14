import * as React from "react";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";

export function ThemedTextField(props) {
  //const toggledLight = useSelector((state) => state.toggleLight);

  const themedTextFieldStyling = createTheme({
    components: {
      MuiTextField: {
        variants: [
          {
            props: { variant: "filled" },
            style: {
              ".MuiInputLabel-root": {
                color: "blue",

                "&.Mui-focused": {
                  color: "red",

                  ".MuiInputLabel-asterisk": {
                    color: "red",
                  },
                },

                "&.Mui-error": {
                  color: "red",

                  ".MuiInputLabel-asterisk": {
                    color: "red",
                  },
                },

                ".MuiInputLabel-asterisk": {
                  color: "red",

                  "&.Mui-focused": {
                    color: "red",
                  },
                },

                "&.Mui-disabled": {
                  color: "red",
                },
              },

              ".MuiOutlinedInput-root": {
                color: "red",

                "&:hover": {
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                },

                "&.Mui-focused": {
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                },

                "&.Mui-error": {
                  color: "red",

                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                },

                "&.Mui-disabled": {
                  color: "red",

                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
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
            borderColor: "red",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&.Mui-disabled": {
              WebkitTextFillColor: "red",
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
