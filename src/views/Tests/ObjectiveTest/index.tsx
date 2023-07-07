import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoTextSvg } from "../../../assets";

const ObjectiveTest = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();

    return (
        <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"end"}>
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"2rem 0"} display={"flex"} justifyContent={"space-between"}>
                <Box flexGrow={1}>
                    <Box padding={"1.6rem 2rem 0 0"}>
                        <ButtonKit fullWidth variant="contained">
                            <Typography>آزمون بعدی</Typography>
                        </ButtonKit>
                    </Box>
                    <Box marginTop={"2rem"} display={"flex"} gap={"0.5rem"}>
                        <ButtonKit variant="contained">
                            <Typography>1</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>2</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>3</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>4</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>5</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>6</Typography>
                        </ButtonKit>
                    </Box>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    display={"flex"}
                    flexGrow={1}
                >
                    <Typography fontSize={"3.6rem"} variant="subtitle1">
                        آزمون شماره ۷
                    </Typography>
                </Box>
                <Box textAlign={"right"} flexGrow={1}>
                    <Box padding={"1.6rem 0 0 2rem"}>
                        <ButtonKit fullWidth variant="contained">
                            <Typography>آزمون قبلی</Typography>
                        </ButtonKit>
                    </Box>
                    <Box marginTop={"2rem"} display={"flex"} gap={"0.5rem"} justifyContent={"end"}>
                        <ButtonKit variant="contained">
                            <Typography>1</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>2</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>3</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>4</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>5</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>6</Typography>
                        </ButtonKit>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ObjectiveTest;
