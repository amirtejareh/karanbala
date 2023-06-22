import { Box, Typography } from "@mui/material";

const MainMajor = () => {
    return (
        <Box gap={"2.5rem"} display={"flex"} flexDirection={"column"}>
            <Box>
                <Typography fontSize={"2rem"} variant="subtitle1">
                    پایه تحصیلی خود را انتخاب کنید
                </Typography>
            </Box>
            <Box></Box>
        </Box>
    );
};

export { MainMajor };
