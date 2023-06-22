import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaBannerSvg, KaranbalaBooklet, KaranbalaLast } from "../../../assets";
import { ParentInfo } from "./ParentInfo";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    main: {
        minHeight: "700px",
        height: "auto",
    },

    parentInfo: {
        margin: "5rem 0",
    },
    info: {
        "& > div": {
            margin: "0 1rem 0 0",
        },
        "&  div > h6": {
            fontSize: "1.75rem !important",
        },
    },
}));
const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.main}>
            <ParentInfo />

            <Box
                className={classes.parentInfo}
                justifyContent={"space-evenly"}
                display={"flex"}
                gap={"12.5rem"}
                flexWrap={"wrap"}
            >
                <Box
                    className={classes.info}
                    justifyContent={"space-evenly"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Box>
                        <KaranbalaLast />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">کران آخر</Typography>
                    </Box>
                </Box>

                <Box
                    className={classes.info}
                    justifyContent={"space-evenly"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Box>
                        <KaranbalaBooklet />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">کتابچه راهنمای کران</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { Main };
