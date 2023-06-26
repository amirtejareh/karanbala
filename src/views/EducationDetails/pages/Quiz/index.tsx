import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg } from "../../../../assets";

const Quiz = () => {
    const theme: ThemeOptions = useTheme();

    return (
        <>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                paddingBottom={"7.5rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"2rem"}
            >
                <KaranbalaLogoTextSvg />
            </Box>
            <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
                <Typography fontSize={"3.6rem"} variant="subtitle1">
                    آزمون انتخابی{" "}
                </Typography>
            </Box>
        </>
    );
};

export default Quiz;
