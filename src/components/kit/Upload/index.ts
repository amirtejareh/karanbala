import { Box, Theme } from "@mui/material";
import { styled, withStyles } from "@mui/styles";

export const StyledUploader = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.grey["50"],
        "& span ": {
            color: theme.palette.grey["50"],
        },
        "& svg": {
            fill: theme.palette.grey["50"],
        },
        "& .MuiPickersDay-root": {
            // backgroundColor: theme.palette.grey['100'],
            color: theme.palette.common.white,
            "&.Mui-disabled": {
                color: theme.palette.text.disabled,
            },
        },
    },
}))(Box);
