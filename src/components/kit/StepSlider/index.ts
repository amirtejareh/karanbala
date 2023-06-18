import { Slider } from "@mui/material";
import { styled } from "@mui/styles";

export const StyledStepSlider = styled(Slider)(({ theme }) => ({
    width: "80%",
    marginBottom: "1.6rem",
    marginRight: "1.6rem",

    "& .MuiSlider-thumb": {
        height: 12,
        width: 12,
    },
    "& .MuiSlider-markLabel": {
        fontSize: 12,
        fontWeight: "normal",
    },
    "& .MuiSlider-markLabelActive": {
        color: "#fff",
    },
}));
