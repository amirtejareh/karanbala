import { Slider } from "@mui/material";
import { styled } from "@mui/styles";

export const StyledRangeSlider = styled(Slider)(({ theme }) => ({
    color: "#d6d5dd",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
        height: 10,
        width: 10,
        backgroundColor: "#fff",
        border: "1px solid red",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
        },
        "& .airbnb-bar": {
            height: 1,
            width: 1,
            backgroundColor: "red",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    // "& .MuiSlider-track": {
    //     height: 3
    // },
    // "& .MuiSlider-rail": {
    //     color: "#d8d8d8",
    //     opacity: 1,
    //     height: 3
    // },
    "&.Mui-disabled": {
        color: "red",
    },

    // color: '#d6d5dd',
    // height: 5,
    // width: '90%',
    // marginTop: '15px',
    // '& .MuiSlider-thumb': {
    //     height: 4,
    //     width: 4,
    //     backgroundColor: '#fff',
    //     border: '1px solid red',
    //     '&:hover': {
    //         boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    //     },
    //     '& .airbnb-bar': {
    //         height: 9,
    //         width: 1,
    //         backgroundColor: 'red',
    //         marginLeft: 1,
    //         marginRight: 1,
    //     },
    // },
    // '& .MuiSlider-track': {
    //     height: 5,
    //     color: 'red',
    // },
    // '& .MuiSlider-rail': {
    //     // color: '#bfbfbf',
    //     opacity: 1,
    //     height: 5,
    // },
    // //   '& .MuiSlider-thumb': {
    // //     height: 12,
    // //     width: 12,
    // //   },
    // '& .MuiSlider-markLabel': {
    //     fontSize: 10,
    //     fontWeight: 'normal',
    // },
    // '& .MuiSlider-markLabelActive': {
    //     color: '#fff',
    // },
    // "&.Mui-disabled": {
    //     color: "red"
    // },
}));

export const StyledCandleRangeSlider = styled(Slider)(({ theme }) => ({
    // color: '#fff',
    height: 3,
    transform: "rotate(180deg)",
    "& .MuiSlider-track": {
        // border: 'none',
        height: 3,
        backgroundColor: "#bfbfbf",
    },
    "&  .Mui-active": {
        color: "#fff",
        border: "none",
        height: 10,
    },
    "& 	.MuiSlider-trackInverted": {
        color: "#bfbfbf",
        border: "none",
        height: 10,
    },
    "& .MuiSlider-thumb": {
        height: 2,
        width: 3,
        backgroundColor: "#fe4335",
        border: "2px solid #fe4335",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#52af77",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
    "& .MuiSlider-rail": {
        color: "#fe4335",
        // border: 'none',
        height: 3,
    },
}));

export const StyledCandleRangeSliderInvert = styled(Slider)(({ theme }) => ({
    // color: '#fff',
    height: 8,
    transform: "rotate(180deg)",
    "& .MuiSlider-track": {
        // border: 'none',
        height: 3,
        backgroundColor: "#02c076",
        // transform: 'rotate(180deg)',
    },
    "& .MuiSlider-thumb": {
        height: 2,
        width: 3,
        backgroundColor: "#02c076",
        border: "2px solid #02c076",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#52af77",
        transformOrigin: "bottom left",
        // transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
    "& .MuiSlider-rail": {
        color: "#bfbfbf",
        // opacity: undefined,
        height: 3,
        // transform: 'rotate(180deg)'
    },
}));

export const StyledCandleRangeSliderTransparent = styled(Slider)(({ theme }) => ({
    // color: '#fff',
    height: 3,
    transform: "rotate(180deg)",
    "& .MuiSlider-track": {
        border: "none",
        height: 3,
        backgroundColor: "transparent",
    },
    "&  .Mui-active": {
        color: "#fff",
        border: "none",
        height: 10,
    },
    "& 	.MuiSlider-trackInverted": {
        color: "#bfbfbf",
        border: "none",
        height: 10,
    },
    "& .MuiSlider-thumb": {
        height: 2,
        width: 3,
        backgroundColor: "#fe4335",
        border: "2px solid #fe4335",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#52af77",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
    "& .MuiSlider-rail": {
        color: "transparent",
        border: "none",
        height: 3,
    },
}));

export const StyledCandleRangeSliderInvertTransparent = styled(Slider)(({ theme }) => ({
    // color: '#fff',
    height: 8,
    transform: "rotate(180deg)",
    "& .MuiSlider-track": {
        border: "none",
        height: 3,
        backgroundColor: "transparent",
        // backgroundColor: '#fff',
        // transform: 'rotate(180deg)',
    },
    "& .MuiSlider-thumb": {
        height: 30,
        width: 30,
        backgroundColor: "transparent",
        border: "0px solid #02c076",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#52af77",
        transformOrigin: "bottom left",
        // transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
    "& .MuiSlider-rail": {
        color: "transparent",
        // color: '#fff',
        border: "none",
        // opacity: undefined,
        height: 3,
        // transform: 'rotate(180deg)'
    },
}));
