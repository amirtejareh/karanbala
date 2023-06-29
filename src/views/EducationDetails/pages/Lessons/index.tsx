import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { ArrowDownSvg, KaranbalaLogoTextSvg } from "../../../../assets";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    courses: {
        display: "flex",
        gap: "5rem",
        height: "7rem",
        justifyContent: "center",
    },
    seasons: {
        width: "27.125rem",
        display: "flex",
        backgroundColor: theme?.palette?.secondary["main"],
        borderRadius: "1.5rem",
        padding: "1.5rem 2.5rem",
        justifyContent: "space-between",
        alignItems: "center",
    },
    episodes: {
        display: "flex",
        flexBasis: "50%",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    episodeBoxes: {
        display: "flex",
        flexBasis: "100%",
        backgroundColor: theme?.palette?.grey["A100"],
        border: `1px solid ${theme?.palette?.grey["200"]}`,
        borderRadius: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    episodeTitle: {
        display: "flex",
        padding: "1.5rem 2.5rem",
        borderRadius: "1rem",
        justifyContent: "space-between",
        flexBasis: "100%",
    },
    episodeLessons: {
        display: "flex",
        borderRadius: "1rem",
        justifyContent: "space-between",
        flexBasis: "100%",
        padding: "1.5rem 2.5rem 1.5rem 2.5rem",
        flexWrap: "wrap",
    },
    episodeLessonTitle: {
        display: "flex",
        padding: "1.5rem 2.5rem",
        borderRadius: "1rem",
        justifyContent: "space-between",
        flexBasis: "100%",
        backgroundColor: theme?.palette?.grey["50"],
        border: `1px solid ${theme?.palette?.grey["200"]}`,
    },
    content: {
        display: "none",
    },
    arrowDown: {
        width: "1.5rem",
        height: "1.5rem",
    },
    arrowUp: {
        width: "1.5rem",
        height: "1.5rem",
    },
}));

const Lessons = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();

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
                    درسنامه
                </Typography>
            </Box>
            <Box className={classes.courses}>
                <Box className={classes.seasons}>
                    <Typography>فصل ۱: تابع</Typography>
                    <Typography>
                        <ArrowDownSvg className={classes.arrowDown} />
                    </Typography>
                </Box>
                <Box className={classes.episodes}>
                    <Box className={classes.episodeBoxes}>
                        <Box className={classes.episodeTitle}>
                            <Typography>درس اول</Typography>
                            <Typography>
                                <ArrowDownSvg className={classes.arrowDown} />
                            </Typography>
                        </Box>

                        <Box className={classes.episodeLessons}>
                            <Box className={classes.episodeLessonTitle}>
                                <Typography>تابع خطی، ثابت و تابع درجه دوم</Typography>
                                <Typography>
                                    <ArrowDownSvg className={classes.arrowDown} />
                                </Typography>
                            </Box>
                            <Box className={classes.content}>test</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Lessons;
