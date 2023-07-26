import React, { ReactNode } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { CloseSvg } from "../../../assets";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
        color: "#1D252F !important",
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
        padding: theme.spacing(5),
        fontSize: "18px !important",
        color: "#1D252F",
        minHeight: "15rem",
    },
}))(MuiDialogContent);

export interface IModalKit extends Omit<DialogProps, "open" | "title" | "children"> {
    opener?: React.ReactElement;
    title?: React.ReactNode;
    onSubmit?: () => void;
    onOpen?: () => void;
    secondary?: boolean;
    // children?: React.ReactElement;
    children: (arg: {
        handleApproved: () => void;
        handleClose: () => void;
        state?: boolean;
    }) => React.ReactElement;
    open?: boolean;
    onClose?: () => void;
    modalState?: boolean;
}

const useStyles = makeStyles(() => ({
    paper: {
        width: "100%",
        backgroundImage: "none",
        backgroundColor: "#fff",
    },
}));

const ModalKit: React.FC<IModalKit> = (props) => {
    const {
        opener,
        title,
        onSubmit,
        onOpen,
        children,
        secondary,
        fullScreen: fullScreenProp,
        onClose,
        modalState = false,
        ...rest
    } = props;
    const [open, setOpen] = React.useState(modalState);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    React.useEffect(() => {
        setOpen(modalState);
    }, [modalState]);

    const handleClickOpen = () => {
        if (onOpen) onOpen();
        setOpen(true);
    };

    const handleClose = () => {
        if (onClose) onClose();
        setOpen(false);
    };

    const handleApproved = () => {
        setOpen(false);
        if (onSubmit) {
            onSubmit();
        }
        if (onClose) onClose();
        setOpen(false);
    };

    return (
        <>
            {opener &&
                React.cloneElement(opener as React.ReactElement, { onClick: handleClickOpen })}
            <Dialog
                fullScreen={fullScreenProp || fullScreen}
                maxWidth={"xs"}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                classes={{ paper: classes.paper }}
                open={open}
                TransitionComponent={Transition}
                {...rest}
            >
                {title && (
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {title}
                    </DialogTitle>
                )}
                {/* <Divider /> */}
                <DialogContent>{children({ handleApproved, handleClose })}</DialogContent>
            </Dialog>
        </>
    );
};

export default ModalKit;
