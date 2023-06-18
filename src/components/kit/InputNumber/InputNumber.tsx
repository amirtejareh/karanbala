import {
    FormHelperText,
    IconButton,
    InputAdornment,
    Stack,
    TextFieldProps,
    Theme,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowDown } from "../../../assets";
import { InputKit } from "../Input";

interface IInputNumberKitProps {
    isError?: boolean;
    errorText?: string;
    label: string;
    maxNum?: number;
    minNum?: number;
    handlePriceUp?: () => void;
    handlePriceDown?: () => void;
    onClickMaxNum?: () => void;
    onClickMinNum?: () => void;
    visibleRangePrice?: boolean;
    visibleControlPrice?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    numberInput: {
        height: "4.2rem",
        maxHeight: "4.2rem",
        backgroundColor: "rgba(134, 135 ,136 ,47%)",
        width: "6rem",
        marginLeft: "-14px",
        borderRadius: " 8px 0 0 8px ",
        justifyContent: "center",
        color: "#d6d5dd",
        alignItems: "center",
        cursor: "pointer",
    },

    iconUp: {
        position: "relative",
        width: "2.5rem",
        height: "1.8rem",
        "&:before": {
            content: `" "`,
            backgroundImage: `url(${ArrowDown})`,
            left: "0",
            top: "0",
            position: "absolute",
            width: "25px",
            backgroundRepeat: " no-repeat",
            height: "19px",
            pointerEvents: "none",
            backgroundColor: theme.palette.background.paper,
            transform: "rotate(180deg)",
            zIndex: 10,
            backgroundPosition: "center",
            cursor: "pointer",
        },
    },
    iconDown: {
        position: "relative",
        width: "2.5rem",
        height: "1.8rem",
        "&:after": {
            content: `" "`,
            backgroundImage: `url(${ArrowDown})`,
            left: "0",
            top: "0",
            position: "absolute",
            width: "25px",
            backgroundRepeat: " no-repeat",
            height: "15px",
            pointerEvents: "none",
            backgroundColor: theme.palette.background.paper,
            zIndex: 10,
            backgroundPosition: "center",
            cursor: "pointer",
        },
    },
    fixTitle: {
        color: "#d6d5dd",
    },
    error: {
        borderColor: theme.palette.error.main,
    },
}));

const InputNumberKit: React.FC<IInputNumberKitProps & TextFieldProps> = (props) => {
    const {
        handlePriceUp,
        handlePriceDown,
        onClickMaxNum,
        onClickMinNum,
        visibleRangePrice = true,
        visibleControlPrice = true,
        label,
        maxNum,
        minNum,
        InputProps,
        isError,
        errorText,
        ...rest
    } = props;
    const classes = useStyles();

    return (
        <>
            <InputKit
                variant="outlined"
                sx={{ mb: 2 }}
                InputProps={{
                    inputMode: "numeric",
                    startAdornment: (
                        <InputAdornment className={classes.fixTitle} position="start">
                            <Typography variant="subtitle1">{label}</Typography>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {visibleControlPrice && (
                                <Stack position={"relative"}>
                                    <IconButton
                                        size={"small"}
                                        aria-label="up"
                                        className={classes.iconUp}
                                        onClick={handlePriceUp}
                                    ></IconButton>
                                    <IconButton
                                        size={"small"}
                                        aria-label="down"
                                        className={classes.iconDown}
                                        onClick={handlePriceDown}
                                    ></IconButton>
                                </Stack>
                            )}

                            {visibleRangePrice && (
                                <Stack className={classes.numberInput}>
                                    <Typography
                                        variant="subtitle2"
                                        component={"p"}
                                        sx={{ mb: 0.5 }}
                                        onClick={onClickMaxNum}
                                    >
                                        {maxNum}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component={"p"}
                                        onClick={onClickMinNum}
                                    >
                                        {minNum}
                                    </Typography>
                                </Stack>
                            )}
                        </InputAdornment>
                    ),
                }}
                {...rest}
                // value={rest.value}
            />
            {isError && (
                <FormHelperText id="component-error-text" error sx={{ mt: 2 }}>
                    {errorText}
                </FormHelperText>
            )}
        </>
    );
};

export default InputNumberKit;
