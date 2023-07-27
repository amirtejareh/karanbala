import React from "react";
import { LinkProps, SvgIcon, ThemeOptions } from "@mui/material";
import { Box } from "@mui/system";
import { CheckedTrueSvg } from "../assets";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LinkBehavior from "../components/LinkBehavior";

declare module "@mui/material/styles" {
    interface PaletteOptions {
        btnBgColor: PaletteOptions["primary"];
        others: {
            info: PaletteOptions["primary"];
            success: PaletteOptions["primary"];
            warning: PaletteOptions["primary"];
        };
    }
    interface Palette {
        tertiary: Palette["primary"];
        grayVariant: Palette["primary"];
    }
}

const theme: ThemeOptions = {
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
            xl: 1440,
        },
        unit: "px",
    },
    direction: "ltr",
    components: {
        MuiFab: {
            defaultProps: { size: "base", color: "primary" },
            styleOverrides: {
                root: {
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:active": {
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    },
                },
                extended: {
                    width: "auto !important",
                },

                sizeXs: {
                    height: 30,
                    minHeight: 30,
                    width: 30,
                    minWidth: 30,
                },
                sizeSm: {
                    height: 34,
                    minHeight: 34,
                    width: 34,
                    minWidth: 34,
                },
                sizeBase: {
                    height: 38,
                    minHeight: 38,
                    width: 38,
                    minWidth: 38,
                },
                sizeLg: {
                    height: 42,
                    minHeight: 42,
                    width: 42,
                    minWidth: 42,
                },
                sizeXl: {
                    height: 50,
                    minHeight: 50,
                    width: 50,
                    minWidth: 50,
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeXs: {},
                fontSizeSm: {},
                fontSizeBase: {},
                fontSizeLg: {},
                fontSizeXl: {},
            },
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: "outlined",
                InputLabelProps: {
                    // shrink: true,
                },
            },
            styleOverrides: {
                root: {
                    "&:hover": {
                        borderColor: "#313743",
                    },
                    "& label:not(.MuiInputLabel-sizeSmall)": {
                        transform: "translate(14px, 11px) scale(1)",
                    },
                    "& label.MuiInputLabel-shrink:not(.MuiInputLabel-sizeSmall)": {
                        transform: "translate(14px, -9px) scale(0.75) !important",
                    },
                    "& label": {
                        fontSize: "1.4rem",
                        "&:not(.MuiInputLabel-sizeSmall)": {
                            transform: "translate(14px, 14px) scale(1)",
                        },
                    },
                    "& .MuiOutlinedInput-root": {
                        "& input::placeholder": {
                            color: "#d6d5dd",
                            opacity: "unset",
                        },

                        "& fieldset": {
                            // borderWidth: "0.75px",
                            borderColor: "#2b313c",
                        },
                        "&:hover fieldset": {
                            borderColor: "#313743",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#313743",
                            borderWidth: "1px",
                        },
                        "&.Mui-disabled fieldset": {
                            borderColor: "#313743",
                        },
                    },
                },
            },

            variants: [
                {
                    props: { rounded: true },
                    style: {
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "1000rem",
                        },
                    },
                },
            ],
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: "#797979",
                    },
                    "&.Mui-focused": {
                        color: "#313743",
                        borderColor: "#313743 ",
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                inputSizeSmall: {
                    paddingTop: "8px !important",
                    paddingBottom: "8px !important",
                    height: "1.375em",
                },
                input: {
                    paddingTop: "16px !important",
                    paddingBottom: "16px !important",
                    height: "0.35em",
                    lineHeight: "0.35em",
                    fontSize: "1.4rem",
                    "&::placeholder": {
                        color: "#6e737f",
                        opacity: "unset",
                    },
                },
                root: {
                    "&.MuiOutlinedInput-root": {
                        fontSize: "14px",
                        lineHeight: "1.6375em",
                        borderRadius: "4px",
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#313743 !important",
                                borderWidth: "1px",
                            },
                        },
                    },
                    "&.MuiFilledInput-root": {
                        fontSize: "14px",
                        lineHeight: "1.6375em",
                        borderRadius: "4px",
                        backgroundColor: "#272b37",
                        "&:before": {
                            display: "none",
                        },
                        "&:after": {
                            display: "none",
                        },
                    },
                    ":hover": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#313743 !important",
                        },
                    },
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                checkedIcon: (
                    <SvgIcon
                        width={16}
                        height={16}
                        component={CheckedTrueSvg}
                        viewBox="0 0 16 16"
                    />
                ),
                disableRipple: true,
                icon: (
                    <Box
                        sx={{
                            width: "16px",
                            height: "16px",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.6)",
                            boxSizing: "border-box",
                            borderRadius: "2px",
                        }}
                    />
                ),

                sx: {
                    "&:hover": { bgcolor: "transparent" },
                },
            },
            styleOverrides: {
                root: {
                    paddingLeft: "0",
                    paddingBottom: "0px",
                    "&.Mui-checked": {
                        "& .MuiSvgIcon-root": {
                            width: "16px ",
                            height: "16px ",
                            "& path:nth-of-type(1)": { fill: "#03BD90" },
                        },
                    },
                },
            },
        },
        MuiRadio: {
            defaultProps: {
                sx: {
                    "&:hover": { bgcolor: "transparent" },
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                IconComponent: KeyboardArrowDownRoundedIcon,
            },
            styleOverrides: {
                select: {
                    "&.MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0 !important",
                    },
                    "&:hover": {
                        borderColor: "#313743 !important",
                    },
                    notchedOutline: {
                        borderWidth: "0",
                    },
                    "&.MuiOutlinedInput-input": {
                        border: "solid 1px #2b313c ",
                        height: "1.42em",
                        lineHeight: "1.42em",
                        fontSize: "1.4rem",
                    },

                    "& ~ fieldset": {
                        borderWidth: "0",
                        "&:hover": {
                            // borderColor: '#a9a9a9 !important',
                        },
                    },
                    "& .MuiTextField-root": {
                        "&:hover": {
                            borderColor: "#313743 !important",
                        },
                    },

                    "& ~ .MuiSelect-icon": {
                        fill: "#6e737f",
                    },
                    "& ~ .MuiSelect-nativeInput": {
                        "& input::placeholder": {
                            color: "#6e737f",
                            opacity: "unset",
                        },
                    },
                },
                filled: {
                    fontSize: "14px",
                    lineHeight: "1.6375em",
                    borderRadius: "4px",
                    backgroundColor: "#272b37",
                    border: "none !important",
                    "&.MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0 !important",
                    },
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    "& .Mui-checked+.MuiSwitch-track": {
                        backgroundColor: "#CCF8FF",
                    },
                    "& .MuiSwitch-track": {
                        backgroundColor: "#ccc",
                    },
                },
                track: {
                    backgroundColor: "#ccc",
                },
            },
        },
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiCssBaseline: {
            styleOverrides: `
			  h1 {
				color: grey;
			  }
			  html {
				font-size: 62.5%; /* 62.5% of 16px = 10px */
		  	  }
			`,
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "1px solid #E5E7EB",
                    // color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
                    WebkitFontSmoothing: "auto",
                    letterSpacing: "normal",
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#F9FAFB",
                        borderBottom: "solid 1px #E5E7EB",
                        color: "#6B7280",
                    },
                    "& .MuiDataGrid-columnsContainer": {
                        borderBottom: "solid 1px #E5E7EB",
                    },
                    "& .MuiDataGrid-columnSeparator": {
                        display: "none",
                    },
                    "& .MuiDataGrid-iconSeparator": {
                        display: "none",
                    },
                    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
                        borderBottom: "solid 1px #E5E7EB",
                    },
                    "& .MuiDataGrid-row": {
                        color: "#111827",
                        fontSize: "1.4rem",
                    },
                    "MuiDataGrid-cell": {},
                    "MuiPaginationItem-root": {
                        borderRadius: 0,
                    },
                },
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    marginRight: "1.5rem",
                    "& .MuiPagination-ul": {
                        "& li": {
                            "& button": {
                                backgroundColor: "#3b3b43",
                                border: "none",
                                borderRadius: 4,
                                minWidth: "25px",
                                height: "25px",
                                padding: 0,
                                margin: "2px",
                            },
                            "& svg": {
                                fill: "#6B7280",
                            },
                        },
                    },
                    "& .Mui-selected": {
                        borderRadius: 0,
                        border: `solid 1px #FADD62`,
                        color: `#6B7280!important`,
                        // @ts-ignore
                        backgroundColor: `#FFEEA7 !important`,
                    },
                },
            },
        },
        MuiTable: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    "& .MuiTableHead-root": {
                        background:
                            "linear-gradient(90.5deg, rgba(37, 43, 61, 0.7) 1.05%, rgba(37, 43, 61, 0.1) 109.05%)",
                        borderRadius: "8px",
                    },
                    "& .MuiTableCell-head": {
                        backgroundColor: "transparent",
                        color: "#d6d5dd",
                        padding: "1rem 0.5rem",
                        lineHeight: "2rem",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        border: "none",
                        textAlign: "center",
                        "&:last-child": {
                            borderRadius: "0px 8px 8px 0px",
                        },
                        "&:first-of-type": {
                            borderRadius: "8px 0px 0px 8px",
                        },
                    },
                    "& .MuiTableBody-root": {
                        "& tr:nth-of-type(even)": {
                            backgroundColor: "transparent",
                        },
                    },
                    "& .MuiTableCell-body": {
                        border: "none",
                        textAlign: "center",
                        padding: "1rem 0.5rem",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        backgroundColor: "transparent !important",
                        "& p": {
                            fontSize: "1.1rem !important",
                        },
                    },
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: "0 2px 30px 0 rgba(0, 0, 0, 0.5)",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    boxShadow: "0 2px 30px 0 rgba(0, 0, 0, 0.5)",
                    paddingBottom: 0,
                    paddingTop: 0,
                },
            },
        },

        MuiMenuItem: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: "#000",
                    "&:not(:last-child)": {
                        borderBottom: "solid 1px #31313638",
                    },
                    ":hover": {
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#22A9C0",
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    backgroundImage: "none !important",
                    color: "#fff",
                },
                root: {
                    "& .MuiOutlinedInput-root": {
                        padding: "11px 10px !important",
                    },
                    "& .MuiFilledInput-root": {
                        padding: "3px 10px !important",
                        "& .MuiInputAdornment-root": {
                            marginTop: "0px !important",
                        },
                    },
                },
                listbox: {
                    '& .MuiAutocomplete-option[aria-selected="true"]': {
                        color: "#22A9C0 !important",
                    },
                },
                option: {
                    fontSize: 12,

                    "@media (min-width:600px) and (max-width:1440px)": {
                        paddingRight: "0px !important",
                        paddingLeft: "0px !important",
                        fontSize: 12,
                        "& .MuiCheckbox-root": {
                            marginLeft: "0px !important",
                        },
                        "& p , & span": {
                            fontSize: 12,
                            marginLeft: 10,
                            lineHeight: 1.5,
                        },
                    },
                    "&:not(:last-child)": {
                        borderBottom: "solid 1px #fff",
                    },
                    "&.Mui-focused": {
                        color: "#22A9C0 !important",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "unset",
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    direction: "rtl",
                },
            },
        },

        MuiTabs: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    minHeight: "auto",
                    "& .MuiTabScrollButton-root ": {
                        width: 18,
                    },
                },
            },
        },
    },
    palette: {
        mode: "dark",
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            light: "#FBE9FF", // 25
            main: "#32074F", // 400
            dark: "#0E0125", // 900
            "900": "#0E0125",
            "800": "#14022D",
            "700": "#14022D",
            "600": "#1D0338",
            "500": "#260543",
            "400": "#32074F",
            "300": "#722F95",
            "200": "#AA5BCA",
            "100": "#D996ED",
            "50": "#EEC9F6",

            contrastText: "#fff",
        },
        secondary: {
            light: "#FFFCF8", // 25
            main: "#FFAD63", // 400
            dark: "#2B0901", // 900
            "900": "#2B0901",
            "800": "#932F0E",
            "700": "#B74817",
            "600": "#DB6522",
            "500": "#FF862F",
            "400": "#FFAD63",
            "300": "#FFC482",
            "200": "#FFDCAB",
            "100": "#FFF0D5",
            "50": "#FFF7EA",
            contrastText: "#fff",
        },

        grey: {
            "50": "#ECF2F6",
            "100": "#DAE4ED",
            "200": "#B2BFCB",
            "300": "#818B98",
            "400": "#515A66",
            "500": "#404955",
            "600": "#38414D",
            "700": "#2B333E",
            "800": "#252D37",
            "900": "#1D252F",
            //new greys
            A100: "#FBFDFF", //25
        },

        error: {
            light: "#FFF1EC", // 25
            main: "#C82D50", // 500
            dark: "#3A031F", // 900
            "900": "#3A031F",
            "800": "#6F0B3E",
            "700": "#851745",
            "600": "#A71F4A",
            "500": "#C82D50",
            "400": "#E93E55",
            "300": "#F16C72",
            "200": "#F8908B",
            "100": "#FCBDB2",
            "50": "#FDE1D8",
            contrastText: "#fff",
        },
        others: {
            info: {
                main: "#2CAEE5",
                light: "#DCF5FF",
                dark: "#2CAEE5",
            },
            success: {
                main: "#05AF82",
                light: "#E5FFEC",
                dark: "#05AF82",
            },
            warning: {
                main: "#F57C00",
                light: "#FFF1E2",
                dark: "#F57C00",
            },
        },
        warning: {
            main: "#F57C00",
            contrastText: "#fff",
        },
        info: {
            main: "#2CAEE5",
            contrastText: "#fff",
        },
        success: {
            main: "#05AF82",
            contrastText: "#fff",
        },
        btnBgColor: {
            main: "linear-gradient(90deg, #22A9C0 0%, #03BD90 100%)",
        },
        text: {
            primary: "#000000",
            secondary: "#1D252F", // grey 600
            disabled: "#999999", // grey variant 400
        },

        divider: "#bdbdbd", // A400
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            paper: "#fff",
            default: "#FFFFFF",
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    shape: {
        borderRadius: 8,
        rounded: "1000rem",
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                minHeight: 48,
            },
            "@media (min-width:600px)": {
                minHeight: 64,
            },
        },
    },
    shadows: [
        "none",
        "0 1px 15px 0 rgba(0, 0, 0, 0.5)",
        "0 0.5px 0.5px 0 rgba(0, 0, 0, 0.14)",
        "0 1.5px 0.5px 0 rgba(0, 0, 0, 0.12)",
        "0 1.5px 1.5px 0 rgba(0, 0, 0, 0.12)",
        "0 0.5px 5px 0 rgba(0, 0, 0, 0.12)",
        "0 0.5px 9px 0 rgba(0, 0, 0, 0.12)",
        "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
        "0 1.5px 7px 0 rgba(0, 0, 0, 0.12)",
        "0 6px 8.5px 0 rgba(0, 0, 0, 0.14)",
        "0 3px 15px 0 rgba(0, 0, 0, 0.12)",
        "0 12px 19px 0 rgba(0, 0, 0, 0.14)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
    ],
    typography: {
        htmlFontSize: 10,
        fontFamily: "IRANSans",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 700,
            fontSize: "4.8rem",
            lineHeight: "7.5rem",
        },
        h2: {
            fontWeight: 700,
            fontSize: "4rem",
            lineHeight: "6.2rem",
        },
        h3: {
            fontWeight: 700,
            fontSize: "3.4rem",
            lineHeight: "5.3rem",
        },
        h4: {
            fontWeight: 700,
            fontSize: "2.4rem",
            lineHeight: "3.7rem",
        },
        h5: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: "3.1rem",
        },
        h6: {
            fontWeight: 700,
            fontSize: "1.8rem",
            lineHeight: "2.8rem",
        },
        subtitle1: { fontWeight: 700, fontSize: "1.6rem", lineHeight: "24px" },
        subtitle2: { fontWeight: 400, fontSize: "1.2rem", lineHeight: "2.5rem" },
        body1: { fontWeight: 400, fontSize: "1.6rem", lineHeight: "2.5rem" },
        body2: { fontWeight: 400, fontSize: "1.4rem", lineHeight: "2.2rem" },
        button: { fontWeight: 500, fontSize: "1.7rem", lineHeight: "2.2rem" },
        caption: { fontWeight: 400, fontSize: "1.2rem", lineHeight: "1.6rem" },
        overline: { fontWeight: 400, fontSize: "1rem", lineHeight: "1.3rem" },
    },

    transitions: {
        easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
    zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
};

export default theme;
