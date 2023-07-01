import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg } from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";

const Attach = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                paddingBottom={"7.5rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"2rem"}
            >
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
                <Typography fontSize={"3.6rem"} variant="subtitle1">
                    ضمائم{" "}
                </Typography>
            </Box>
        </>
    );
};

export default Attach;
