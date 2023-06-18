import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Theme } from "@mui/material";
import { withStyles } from "@mui/styles";

export const StyledDatePicker = withStyles((theme: Theme) => ({
    root: {
        color:
            theme.palette.mode === "dark" ? theme.palette.grey["50"] : theme.palette.grey["A200"],
        "& span ": {
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.grey["50"]
                    : theme.palette.grey["A200"],
        },
        "& svg": {
            fill:
                theme.palette.mode === "dark"
                    ? theme.palette.grey["50"]
                    : theme.palette.grey["A200"],
        },
        "& .MuiPickersDay-root": {
            // backgroundColor: theme.palette.grey['100'],
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : theme.palette.grey["A200"],
            "&.Mui-disabled": {
                color: theme.palette.text.disabled,
            },
        },
    },
}))(DatePicker);
