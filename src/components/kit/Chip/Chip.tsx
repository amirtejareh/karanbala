import React from "react";
import { Chip, ChipProps, Theme } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import clsx from "clsx";
import { CloseSvg } from "../../../assets";

interface IChipKitProps extends ChipProps {
    colors?: "info" | "error" | "primary" | "secondary";
    height?: number;
    disabled?: boolean;
    width?: number;
    fontSize?: number;
    borderRadius?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    error: {
        backgroundColor: `${theme.palette.error.main} !important`,
        color: `${theme.palette.error.main} !important`,
        borderColor: theme.palette.error.main,
        // "&:hover": {
        //   backgroundColor: `${theme.palette.error.dark} !important`,
        // },
    },

    primary: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.main} !important`,
        borderColor: ` ${theme.palette.primary.main} !important`,
    },

    info: {
        backgroundColor: `${theme.palette.info.main} !important`,
        color: `${theme.palette.info.main} !important`,
        borderColor: ` ${theme.palette.info.main} !important`,
    },
    disabled: {
        backgroundColor: "#e7e7e7 !important",
        borderColor: "#e7e7e7 !important",
        color: "#b5afaf !important",
        cursor: "not-allowed !important",
        "& svg": {
            fill: "#7e7e7e !important",
        },
    },
}));

const Custom = withStyles((theme) => ({
    root: {
        borderRadius: "10px",
        fontSize: theme.typography.caption.fontSize,
        fontWeight: 400,
        lineHeight: theme.typography.caption.fontSize,
        position: "relative",
        margin: " 0 0.4rem",
        "& span ": {
            padding: "0",
        },
        "&.MuiChip-colorDefault": {
            // backgroundColor: `${theme.palette.grey[700]} `,
            // color: `${theme.palette.grey.A100}`,
            // borderColor: ` ${theme.palette.grey[700]} `,
            cursor: "pointer ",

            "& svg": {
                position: "absolute",
                right: "8px",
                top: "-2px",
            },
        },
        "& .MuiChip-avatar": {
            width: "75px",
            height: "auto",
            maxWidth: "100%",
            margin:'0',
        },
    },
    icon: {
        color: "inherit",
    },
    outlined: {
        backgroundColor: `transparent !important`,
        border: "1px solid #fff",
        color: "#D6D5DD",
    },
    filled: {
        // backgroundColor: theme.palette.primary.main,
        // borderColor: theme.palette.primary.main,
        color: theme.palette.grey.A200,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
    filledSecondary: {
        background: `rgba(3, 189, 144, 0.2) !important`,
        color: `${theme.palette.secondary.main} !important`,
        borderColor: ` ${theme.palette.secondary.main} !important`,
    },
}))(Chip);

const ChipKit: React.FC<IChipKitProps> = (props) => {
    const { colors, height, disabled, width, fontSize, borderRadius, ...rest } = props;

    const classes = useStyles();

    return (
        <Custom
            className={clsx({
                [classes.error]: colors?.includes("error"),
                [classes.info]: colors?.includes("info"),
                [classes.primary]: colors?.includes("primary"),
                [classes.disabled]: disabled,
            })}
            disabled={disabled}
            deleteIcon={<CloseSvg style={{ width: 6 }} />}
            {...rest}
            // size={"small"}
            style={{ width: width, height: height, fontSize: fontSize, borderRadius: borderRadius }}
        />
           
    );
};

ChipKit.defaultProps = {
    width: 54,
    height: 24,
};

export default ChipKit;
