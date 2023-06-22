import { Box } from "@mui/material";
import { MainBanner } from "./MainFragments/MainBanner";
import { MainParentInfo } from "./MainFragments/MainParentInfo";
import { MainMajor } from "./MainFragments/MainMajor";

const Main = () => {
    return (
        <Box minHeight={"700px"} height={"auto"}>
            <MainBanner />
            <MainParentInfo />
            <MainMajor />
        </Box>
    );
};

export { Main };
