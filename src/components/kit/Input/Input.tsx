import { FilledInputProps, FormHelperText, TextField, TextFieldProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

interface IInputKitProps {
    textarea?: boolean;
    isError?: boolean;
    errorText?: string;
    splitNumber?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    error: {
        borderColor: theme.palette.error.main,
    },
}));

const InputKit: React.FC<IInputKitProps & TextFieldProps> = (props) => {
    const { InputProps, textarea, isError, errorText, splitNumber = false, ...rest } = props;
    const classes = useStyles();

    return (
        <>
            <TextField
                InputProps={
                    {
                        classes: {
                            ...InputProps?.classes,
                            error: clsx(InputProps?.classes?.error, classes.error),
                            root: clsx(InputProps?.classes?.root),
                        },
                        ...InputProps,
                    } as Partial<FilledInputProps>
                }
                multiline={textarea}
                rows={textarea ? 4 : undefined}
                {...rest}
            />
            {isError && (
                <FormHelperText id="component-error-text" sx={{ mt: 2 }}>
                    {errorText}
                </FormHelperText>
            )}
        </>
    );
};

export default InputKit;
