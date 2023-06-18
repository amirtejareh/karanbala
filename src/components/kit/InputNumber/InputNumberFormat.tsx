import React from "react";
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
import { AddListSvg, ArrowDown, MinusSimpleSvg, MinusSvg, PlusSvg } from "../../../assets";
import { InputKit } from "../Input";
import NumberFormat from "react-number-format";

interface IInputNumberKitProps {
    isError?: boolean;
    errorText?: string;
    label?: string;
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
        height: "3.7rem",
        maxHeight: "3.7rem",
        backgroundColor: "#333B50",
        width: "4rem",
        marginLeft: "-14px",
        borderRadius: " 4px 0 0 4px ",
        justifyContent: "center",
        color: theme.palette.mode === "dark" ? "#d6d5dd" : theme.palette.grey["A200"],
        alignItems: "center",
        cursor: "pointer",
        textAlign:'center',
    },

    iconUp: {
        position: "relative",
        width: "2.5rem",
        height: "1.8rem",
        "&:before": {
            content: `" "`,
            backgroundImage: `url(${[PlusSvg]})`,
            left: "7px",
            top: "-7px",
            position: "absolute",
            width: "25px",
            backgroundRepeat: " no-repeat",
            height: "19px",
            pointerEvents: "none",
            // backgroundColor: theme.palette.background.paper,
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
            backgroundImage: `url(${MinusSimpleSvg})`,
            right: "3px",
            top: "3px",
            position: "absolute",
            width: "25px",
            backgroundRepeat: " no-repeat",
            height: "15px",
            pointerEvents: "none",
            // backgroundColor: theme.palette.background.paper,
            zIndex: 10,
            backgroundPosition: "center",
            cursor: "pointer",
        },
    },
    fixTitle: {
        color: theme.palette.mode === "dark" ? theme.palette.grey["50"] : theme.palette.grey["400"],
    },
    error: {
        borderColor: theme.palette.error.main,
    },
}));

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat<number>, CustomProps>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                isNumericString
                prefix=""
            />
        );
    }
);

const InputNumberFormat: React.FC<IInputNumberKitProps & TextFieldProps> = (props) => {
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
                // sx={{textAlign:'center' }}
                placeholder={label}
                InputProps={{
                    inputComponent: NumberFormatCustom as any,
                    inputMode: "numeric",
                    startAdornment: (
                        <InputAdornment className={classes.fixTitle} position="start">
                            {" "}
                            {visibleControlPrice && (
                                <Stack position={"relative"}>
                                    <IconButton
                                        size={"small"}
                                        aria-label="up"
                                        className={classes.iconUp}
                                        onClick={handlePriceUp}
                                    ></IconButton>
                                </Stack>
                            )}
                            {/* <Typography variant="subtitle1">{label}</Typography> */}
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {visibleControlPrice && (
                                <Stack position={"relative"}>
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
                                        variant="overline"
                                        component={"p"}
                                        sx={{ mb: 0.5 }}
                                        onClick={onClickMaxNum}
                                    >
                                        {maxNum}
                                    </Typography>
                                    <Typography
                                        variant="overline"
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
            />
            {isError && (
                <FormHelperText id="component-error-text" error sx={{ mt: 2 }}>
                    {errorText}
                </FormHelperText>
            )}
        </>
    );
};

export default InputNumberFormat;
