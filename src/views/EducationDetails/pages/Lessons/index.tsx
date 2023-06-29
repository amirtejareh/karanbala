import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { ArrowDownSvg, ArrowUpSvg, KaranbalaLogoTextSvg } from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { set } from "date-fns-jalali";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    courses: {
        display: "flex",
        gap: "5rem",
        height: "7rem",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    seasons: {
        width: "27.125rem",
        display: "flex",
        backgroundColor: theme?.palette?.secondary["main"],
        borderRadius: "1.5rem",
        padding: "1.5rem 2.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem",
        flexWrap: "wrap",
    },
    episodeParent: {
        flexBasis: "50%",
    },
    episodes: {
        display: "flex",
        flexBasis: "50%",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "1rem",
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
        flexWrap: "wrap",
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
        flexWrap: "wrap",
    },
    content: {},
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

    const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
    const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
    const episodes = [1, 2];
    const lessons = [1, 2, 3];

    useEffect(() => {
        const myEpisodeArray = episodes.map((element) => {
            return {
                id: "parent-episode-" + element,
                isSelected: false,
            };
        });
        setParentEpisodeVisible(
            myEpisodeArray.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {})
        );

        const myLessonArray = lessons.map((element) => {
            return {
                id: "children-episode-" + element,
                isSelected: false,
            };
        });

        setChildrenEpisodeVisible(
            myLessonArray.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {})
        );
    }, []);

    const numbers: any = {
        1: "اول",
        2: "دوم",
        3: "سوم",
        4: "چهارم",
        5: "پنجم",
        6: "ششم",
        7: "هفتم",
        8: "هشتم",
        9: "نهم",
        10: "دهم",
    };

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
                <Box>
                    <Box className={classes.seasons}>
                        <Typography>فصل ۱: تابع</Typography>
                        <Typography>
                            <ArrowDownSvg className={classes.arrowDown} />
                        </Typography>
                    </Box>
                    <Box className={classes.seasons}>
                        <Typography>فصل ۲: مثلثات</Typography>
                        <Typography>
                            <ArrowDownSvg className={classes.arrowDown} />
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.episodeParent}>
                    {episodes.map((value: any, index: any) => {
                        return (
                            <Box key={value} className={classes.episodes}>
                                <Box className={classes.episodeBoxes}>
                                    <Box className={classes.episodeTitle}>
                                        <Typography>درس {numbers[value]}</Typography>
                                        <Typography>
                                            <IconButton
                                                onClick={(e: any) => {
                                                    setParentEpisodeVisible((prev: any) => {
                                                        return {
                                                            ...prev,
                                                            ["parent-episode-" + value]:
                                                                !parentEpisodeVisible[
                                                                    "parent-episode-" + value
                                                                ],
                                                        };
                                                    });
                                                }}
                                            >
                                                {parentEpisodeVisible["parent-episode-" + value] ? (
                                                    <ArrowDownSvg className={classes.arrowDown} />
                                                ) : (
                                                    <ArrowUpSvg className={classes.arrowDown} />
                                                )}
                                            </IconButton>
                                        </Typography>
                                    </Box>

                                    {parentEpisodeVisible["parent-episode-" + value] && (
                                        <>
                                            {lessons.map((value, index) => {
                                                return (
                                                    <Box className={classes.episodeLessons}>
                                                        <Box className={classes.episodeLessonTitle}>
                                                            <Typography>
                                                                تابع خطی، ثابت و تابع درجه دوم
                                                            </Typography>
                                                            <Typography>
                                                                <IconButton
                                                                    onClick={(e: any) => {
                                                                        setChildrenEpisodeVisible(
                                                                            (prev: any) => {
                                                                                return {
                                                                                    ...prev,
                                                                                    ["children-episode-" +
                                                                                    value]:
                                                                                        !childrenEpisodeVisible[
                                                                                            "children-episode-" +
                                                                                                value
                                                                                        ],
                                                                                };
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    {childrenEpisodeVisible[
                                                                        "children-episode-" + value
                                                                    ] ? (
                                                                        <ArrowDownSvg
                                                                            className={
                                                                                classes.arrowDown
                                                                            }
                                                                        />
                                                                    ) : (
                                                                        <ArrowUpSvg
                                                                            className={
                                                                                classes.arrowDown
                                                                            }
                                                                        />
                                                                    )}
                                                                </IconButton>
                                                            </Typography>
                                                        </Box>
                                                        {childrenEpisodeVisible[
                                                            "children-episode-" + value
                                                        ] && (
                                                            <Box className={classes.content}>
                                                                video
                                                            </Box>
                                                        )}
                                                    </Box>
                                                );
                                            })}
                                        </>
                                    )}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </>
    );
};

export default Lessons;
