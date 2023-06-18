import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
    TableArrowPositive1,
    TableArrowPositive2,
    TableArrowPositive3,
    TableArrowPositive4,
    TableArrowPositive5,
    TableArrowPositive6,
    TableArrowPositive7,
    TableArrowPositive8,
    TableArrowPositive9,
    TableArrowPositive10,
    TableArrowNegative1,
    TableArrowNegative2,
    TableArrowNegative3,
    TableArrowNegative4,
    TableArrowNegative5,
    TableArrowNegative6,
    TableArrowNegative7,
    TableArrowNegative8,
    TableArrowNegative9,
    TableArrowNegative10,
} from "../../../assets";
interface IStyles {
    type: string;
    vertical?: boolean;
}

const useStyles = makeStyles<Theme, IStyles>((theme: Theme) => ({
    listItemText: {
        marginTop: "2px",
        marginBottom: "2px",
        zIndex: 1,
        "& div": {
            display: "flex",
            "& p": {
                flexBasis: "33.3%",
                "&:nth-of-type(3)": {
                    textAlign: "center",
                },
                "&:last-child": {
                    textAlign: (props) => (props.vertical ? "left" : "right"),
                },
            },
        },

        "& span": {
            display: "inline-block",
            width: "100%",
            fontSize: 12,
        },
    },
    listItemHeaderText: {
        "& span": {
            display: "inline-block",
            width: "100%",
            fontSize: 12,
        },
    },

    error: {
        color: theme.palette.error.main,
    },
    success: {
        color: theme.palette.success.main,
    },
    iconWrapper: {
        position: "absolute",
        width: "100%",
        height: "2rem",
        left: "0",
        right: "0",
        // overflow: "hidden",
        "& div": {
            left: 0,
            width: "100%",
            // width: "25px",
            height: "2rem",
            backgroundRepeat: " no-repeat",
            position: "absolute",
            // backgroundPosition: "center",
            backgroundSize: "contain",
            [theme.breakpoints.up("xl")]: {
                width: "100%",
                // width: "4rem",
                backgroundSize: "auto",
            },
        },
    },
    I1: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive1})`
                : `url(${TableArrowNegative1})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I2: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive2})`
                : `url(${TableArrowNegative2})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I3: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive3})`
                : `url(${TableArrowNegative3})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I4: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive4})`
                : `url(${TableArrowNegative4})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I5: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive5})`
                : `url(${TableArrowNegative5})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I6: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive6})`
                : `url(${TableArrowNegative6})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I7: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive7})`
                : `url(${TableArrowNegative7})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I8: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive8})`
                : `url(${TableArrowNegative8})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I9: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive9})`
                : `url(${TableArrowNegative9})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
    I10: {
        backgroundImage: (props) =>
            props.type === "benefits"
                ? `url(${TableArrowPositive10})`
                : `url(${TableArrowNegative10})`,
        backgroundPosition: (props) => (props.type === "benefits" ? "left" : "right"),
        rotate: (props) => (props.type === "lost" && props.vertical ? "180deg" : "0deg"),
    },
}));

export default useStyles;
