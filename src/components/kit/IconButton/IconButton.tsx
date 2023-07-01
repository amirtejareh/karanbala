import { Box, IconButton, IconButtonProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";

interface IIconButtonProps extends IconButtonProps {
    children: React.ReactElement;
    size?: "medium" | "large";
    selected?: boolean;
    bgColor?: "primary" | "default" | "secondary";
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        borderRadius: "0.8rem",
        backgroundColor: theme.palette.common.white,
        transition: "all 0.3s",
        "&:focus , &:hover ": {},
        border: `1px solid ${theme.palette.warning["light"]}`,
    },
    medium: {
        width: "3rem",
        height: "3rem",
        padding: "0.5rem",
    },
    large: {
        width: "5rem",
        height: "5rem",
        padding: "0.5rem",
        "& svg": {
            width: 23,
            height: 23,
        },
    },
    primary: {
        backgroundColor: "transparent !important",
        backgroundImage: "linear-gradient(90.16deg, #22A9BF 0.13%, #03BD90 99.1%)",
        border: " 1px solid #03BD90",
    },
    secondary: {
        backgroundColor: "#37465C !important",
        border: " 1px solid #37465C",
    },
    selected: {
        backgroundColor: theme.palette.primary.main,
        "& svg path": {
            fill: `${theme.palette.background.paper} !important`,
        },
    },
}));

const IconButtonKit: React.FC<IIconButtonProps> = (props) => {
    const { selected, size, children, bgColor, ...rest } = props;
    const classes = useStyles();

    return (
        <IconButton
            className={classes.root}
            classes={{
                root: clsx({
                    [classes.medium]: size === "medium",
                    [classes.large]: size === "large",
                    [classes.primary]: bgColor === "primary",
                    [classes.secondary]: bgColor === "secondary",
                    [classes.selected]: selected,
                }),
            }}
            {...rest}
        >
            {children}
        </IconButton>
    );
};

export default IconButtonKit;
