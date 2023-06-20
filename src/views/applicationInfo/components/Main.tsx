import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    banner: {
        backgroundColor: theme?.palette?.secondary["50"],
        width: "100%",
        height: "365.48px",
    },
}));
const Main = () => {
    const classes = useStyles();
    return (
        <Box justifyContent={"center"} display={"flex"}>
            <Box className={classes.banner}></Box>
        </Box>
    );
};

export { Main };
