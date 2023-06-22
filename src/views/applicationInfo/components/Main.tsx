import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { MainBanner } from "./MainBanner";
import { MainParentInfo } from "./MainParentInfo";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    main: {
        minHeight: "700px",
        height: "auto",
    },
}));
const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.main}>
            <MainBanner />
            <MainParentInfo />
        </Box>
    );
};

export { Main };
