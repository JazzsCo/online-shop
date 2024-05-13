import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// import type {} from "@mui/x-data-grid/themeAugmentation";
import Colors from "styles/Colors";
// When using TypeScript 4.x and above
// import type {} from "@mui/x-date-pickers/themeAugmentation";
import FontSize from "styles/FontSize";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fontSize = FontSize.medium;
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: Colors.secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      baloo2.style.fontFamily,
      "Poppins",
      "Ubuntu",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 14,
          color: "white",
        },
      },
    },
    // MuiDesktopDatePicker: {
    //   defaultProps: {
    //     // inputFormat: "DD/MM/YYYY",
    //   },
    // },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },
    // MuiDataGrid: {
    //   defaultProps: {
    //     // hideFooterSelectedRowCount: true,
    //     // rowsPerPageOptions: [10],
    //     // pageSize: 10,
    //     // disableColumnFilter: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    //         borderRight: `1px solid gray`,
    //       },
    //       ".MuiDataGrid-sortIcon": {
    //         visibility: "hidden",
    //       },
    //     },
    //     columnHeaders: {
    //       backgroundColor: Colors.primaryColor,
    //       color: "white",
    //       fontSize: fontSize,
    //     },
    //     sortIcon: {
    //       color: "white",
    //     },
    //     menuIconButton: {
    //       color: "white",
    //     },
    //   },
    // },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: fontSize,
          "& .Mui-disabled": {
            backgroundColor: "#f5f5f5",
          },
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `2px solid ${Colors.secondaryColor}`,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: fontSize,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "black",
          fontSize: fontSize,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // indicatorColor:"red",
          textTransform: "none",
          paddingLeft: 30,
          paddingRight: 30,
          fontSize: fontSize,
          // backgroundColor: ownerState.selected
          //   ? Colors.appColorTabActiveBgColor
          //   : Colors.appColorTabInActiveBgColor,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "#f0f1f3",
            borderRadius: "5px",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "none",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: `1px solid ${Colors.tableBorderColor}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          justifyContent: "flex-start",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: "baseline",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const TableCell_No_Style: object =
            ownerState.className == "TableCell_No"
              ? {
                  width: 45,
                  textAlign: "right",
                }
              : {};
          return {
            padding: 10, //Table Cell Padding
            fontSize: fontSize,
            ...TableCell_No_Style,
          };
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& label": {
            fontSize: fontSize,
          },
          ".MuiInputBase-root.MuiOutlinedInput-root": {
            paddingLeft: "12px",
          },
        },
        input: {
          fontSize: fontSize,
        },
        listbox: {
          fontSize: fontSize,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: Colors.blue,
          "&.Mui-checked": {
            color: Colors.blue,
          },
        },
      },
    },
  },
});
export default theme;
