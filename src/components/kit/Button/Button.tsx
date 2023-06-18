import { Button, ButtonProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

interface IButtonProps extends ButtonProps {
    dragged?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    dragged: {
        boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
        "&.MuiButton-outlined": {
            backgroundColor: "rgba(248, 209, 47, 0.08)",
        },
        "&.MuiButton-text": {
            backgroundColor: "rgba(248, 209, 47, 0.08)",
            boxShadow: "unset",
        },
    },
    "&.MuiTouchRipple-child": {
        backgroundColor: "rgba(255, 255, 255, 0.38)",
    },
}));

const ButtonKit: React.FC<IButtonProps> = (props) => {
    const { dragged, children, ...rest } = props;
    const classes = useStyles();
    return (
        <Button
            classes={{
                root: clsx({
                    [classes.dragged]: dragged,
                }),
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default ButtonKit;
