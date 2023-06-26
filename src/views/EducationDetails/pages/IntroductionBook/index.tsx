import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg } from "../../../../assets";

const IntroductionBook = () => {
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
                    معرفی کتاب
                </Typography>
            </Box>
            <Box display={"flex"} gap={"10rem"} justifyContent={"space-between"} margin={"5.2rem"}>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"29.8rem"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    borderRadius={"1rem"}
                >
                    <Typography variant="subtitle1">بیوگرافی کتاب</Typography>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"29.8rem"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    borderRadius={"1rem"}
                >
                    <Typography variant="subtitle1">ریاضی۳ در کنکور</Typography>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"29.8rem"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    display={"flex"}
                    borderRadius={"1rem"}
                >
                    <Typography variant="subtitle1">ریاضی ۳ در امتحان پایانی</Typography>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"29.8rem"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    display={"flex"}
                    borderRadius={"1rem"}
                >
                    <Typography variant="subtitle1">بیوگرافی </Typography>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"29.8rem"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    display={"flex"}
                    borderRadius={"1rem"}
                >
                    <Typography variant="subtitle1">بررسی کتاب و نحوه مطالعه</Typography>
                </Box>
            </Box>
        </>
    );
};

export default IntroductionBook;
