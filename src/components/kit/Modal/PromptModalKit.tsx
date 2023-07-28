import React, { ReactNode } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { makeStyles, WithStyles, withStyles } from "@mui/styles";
import Slide from "@mui/material/Slide";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import { DialogContentText, DialogActions, Theme } from "@mui/material";
import { ButtonKit } from "../Button";
import IconButton from "@mui/material/IconButton";
import { CloseSvg } from "../../../assets";

const useStyles = makeStyles((theme: Theme) => ({
    dialogStyle: {
        "& h2": {
            ...theme.typography.body1,
            fontWeight: 500,
        },
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: "2rem",
    },
    dialogActionStyle: {
        padding: "2rem ",
        display: "flex",
        justifyContent: "center",
    },
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any> | any;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface PromptModalProps {
    onConfirm: (e?: any) => void;
    description?: React.ReactNode;
    title?: string;
    approved?: string;
    denied?: string;
    children: React.ReactNode;
    prompModalState?: boolean;
    onClose?: () => void;
}

export interface DialogTitleProps {
    id: string;
    children: ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(5),
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(2),

        "& .MuiIconButton-root": {
            position: "absolute",
            left: theme.spacing(1),
            top: theme.spacing(1.5),
            "& svg": {
                color: (props: Omit<DialogTitleProps, "classes">) => {
                    return theme.palette.grey[600];
                },
                width: "1.4rem",
                height: "1.4rem",
            },
            "&:hover": {
                svg: {
                    color: (props: Omit<DialogTitleProps, "classes">) => {
                        return theme.palette.primary.main;
                    },
                },
            },
        },
    },
}))((props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle {...other}>
            {children}
            {onClose ? (
                <IconButton size={"small"} aria-label="close" color={"secondary"} onClick={onClose}>
                    <CloseSvg color={"secondary"} />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        paddingTop: `${theme.spacing(2)}!important `,
        color:
            theme.palette.mode === "dark"
                ? `${theme.palette.grey["50"]} !important`
                : `${theme.palette.grey["A200"]} !important`,
    },
}))(MuiDialogContent);

const PromptModalKit: React.FC<PromptModalProps> = (props) => {
    const classes = useStyles();
    const { prompModalState = false, onClose } = props;
    const [open, setOpen] = React.useState(prompModalState);

    React.useEffect(() => {
        setOpen(prompModalState);
    }, [prompModalState]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();
        setOpen(false);
    };

    const handleOnConfirm = () => {
        props.onConfirm();
        setOpen(false);
        if (onClose) onClose();
        setOpen(false);
    };

    const text = {
        title: props.title || "",
        content: props.description || "آیا از انجام این کار مطمئن هستید ؟",
        approved: props.approved || "بله",
        denied: props.denied || "خیر",
    };
    return (
        <>
            {React.cloneElement(props.children as React.ReactElement, { onClick: handleOpen })}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                maxWidth={"sm"}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle onClose={handleClose} id="alert-dialog-slide-title">
                    {text["title"]}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {text["content"]}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogActionStyle}>
                    <ButtonKit autoFocus variant="contained" onClick={handleOnConfirm} size="xs">
                        {text["approved"]}
                    </ButtonKit>
                    {props.denied && (
                        <ButtonKit variant="outlined" onClick={handleClose} size="xs">
                            {text["denied"]}
                        </ButtonKit>
                    )}
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PromptModalKit;
