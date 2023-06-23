import { Box } from "@mui/material";
import { MainBanner } from "./MainFragments/MainBanner";
import { MainParentInfo } from "./MainFragments/MainParentInfo";
import { MainMajor } from "./MainFragments/MainMajor";
import { MainNews } from "./MainFragments/MainNews";

const Main = () => {
    return (
        <Box margin={"0 0 4.6rem"} minHeight={"700px"} height={"auto"}>
            <MainBanner />
            <MainParentInfo />
            <MainMajor />
            <MainNews />
        </Box>
    );
};

export { Main };
