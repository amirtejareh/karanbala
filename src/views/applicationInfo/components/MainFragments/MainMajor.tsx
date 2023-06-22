import { Box, Typography } from "@mui/material";
import { MainMajorBoxes } from "./MainMajorBoxes";

const MainMajor = () => {
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box margin={"5rem 3.25rem 0 0rem"}>
                <Typography fontSize={"2rem"} variant="subtitle1">
                    پایه تحصیلی خود را انتخاب کنید
                </Typography>
            </Box>
            <MainMajorBoxes />
        </Box>
    );
};

export { MainMajor };
