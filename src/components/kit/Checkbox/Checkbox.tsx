import React from "react";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Checkbox, CheckboxProps, FormControlLabel, Theme } from "@mui/material";
import { CheckedSvg } from "../../../assets";

interface IUseStyles {
    simple?: boolean;
    secondary?: boolean;
    width?: number;
    height?: number;
}

const useStyles = makeStyles<Theme, IUseStyles>((theme: Theme) => ({
    formControlLabelRoot: {
        userSelect: "none",
        transition: "0.3s all ease",
        "& > .Mui-checked + *": {
            fontWeight: "bold",
        },
        margin: 0,
    },
    root: {
        "&:hover": {
            backgroundColor: "transparent",
        },
        "& input": {
            display: "none",
        },
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
    },
    icon: {
        borderRadius: 2,
        width: (props) => (props.width ? props.width : 18),
        height: (props) => (props.height ? props.height : 18),
        border: "solid 1px",
        backgroundColor: (props) =>
            props.simple ? theme.palette.common.white : theme.palette.grey[400],
        borderColor: theme.palette.grey[400],
        padding: 2,
        "$root.Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2,
        },
        "input:hover ~ &": {
            backgroundColor: "#ebf1f5",
        },
        "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)",
        },
        [theme.breakpoints.down(600)]: {
            width: 20,
            height: 20,
            borderRadius: 5,
        },
    },
    checkedIcon: {
        "input ~ &": {
            backgroundColor: (props: any) =>
                props.simple ? theme.palette.common.white : theme.palette.info.main,
        },
        "&:before": {
            content: '""',
            display: "block",
            width: 18,
            height: 18,
            //   backgroundImage:
            //     "url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.996' height='7.358' viewBox='0 0 10.996 7.358'%3E%3Cpath d='M16.875,10l-5.547,5.547L8,12.219' transform='translate(-6.939 -8.939)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E\")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            [theme.breakpoints.down(600)]: {
                width: 20,
                height: 20,
            },
        },
        "input:hover ~ &": {
            backgroundColor: (props: any) =>
                props.simple ? theme.palette.common.white : theme.palette.info.main,
        },
    },
    error: {
        color: theme.palette.error.main,
    },
}));

interface ICheckboxProps extends CheckboxProps {
    label?: React.ReactNode;
    error?: boolean;
    simple?: boolean;
    secondary?: boolean;
    width?: number;
    height?: number;
}

const CheckboxKit: React.FC<ICheckboxProps> = (props) => {
    const { width, height, simple, label, error, secondary, ...rest } = props;
    const classes = useStyles({ simple, secondary, width, height });

    return (
        <FormControlLabel
            classes={{ root: classes.formControlLabelRoot }}
            control={
                <Checkbox
                    className={classes.root}
                    disableRipple
                    color="default"
                    checkedIcon={<CheckedSvg className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    inputProps={{ "aria-label": "decorative checkbox" }}
                    {...rest}
                />
            }
            //@ts-ignore
            label={
                error && label
                    ? React.cloneElement(label as React.ReactElement, { className: classes.error })
                    : label
            }
        />
    );
};

export default CheckboxKit;

CheckboxKit.defaultProps = { label: "" };
