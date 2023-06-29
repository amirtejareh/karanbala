import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { ArrowDownSvg, ArrowUpSvg, KaranbalaLogoTextSvg } from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";

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
        backgroundColor: theme?.palette?.primary["main"],
        color: theme?.palette?.common.white,
        height: "6.1rem",
        borderRadius: "1.5rem",
        padding: "1.5rem 2.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem",
        flexWrap: "wrap",
    },
    seasonSelected: {
        width: "27.125rem",
        display: "flex",
        height: "6.1rem",
        backgroundColor: theme?.palette?.secondary["main"],
        borderRadius: "1.5rem",
        color: theme?.palette?.common.black,
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
        color: "#fff",
    },
    arrowLeft: {
        color: "#fff",
        width: "2.5rem",
        height: "2.5rem",
    },
    arrowUp: {
        width: "1.5rem",
        height: "1.5rem",
    },
    arrow: {
        border: "solid black",
        borderWidth: "0 0.1rem 0.1rem 0",
        display: "inline-block",
        padding: "0.4rem",
    },
    arrowLeftParent: {
        width: "41px",
        height: "41px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    down: {
        transform: "rotate(45deg)",
    },
}));

const Lessons = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();

    const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
    const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
    const [seasonVisible, setSeasonVisible] = useState<any>({});
    const [episodes, setEpisodes] = useState<any>({});

    const courses = [
        {
            courseTitle: "ریاضی ۱",
            seasons: [
                {
                    seasonTitle: "تابع",
                    lessons: [
                        {
                            episodes: [
                                {
                                    title: "تابع خطیِ، ثابت وتابع درجه دوم",
                                    attachment: [
                                        {
                                            title: "پی دی اف تابع خطی",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف تابع ثابت",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                                {
                                    title: "مثلثات",
                                    attachment: [
                                        {
                                            title: "(۱) پی دی اف مثلثات مقدماتی",
                                            address: "#",
                                        },
                                        {
                                            title: "(۲) پی دی اف مثلثات ",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                            ],
                        },
                        {
                            episodes: [
                                {
                                    title: "تابع خطیِ، ثابت وتابع درجه سوم",
                                    attachment: [
                                        {
                                            title: "پی دی اف تابع خطی",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف تابع ثابت",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                                {
                                    title: "۲ مثلثات",
                                    attachment: [
                                        {
                                            title: "(۳) پی دی اف مثلثات مقدماتی",
                                            address: "#",
                                        },
                                        {
                                            title: "(۴) پی دی اف مثلثات ",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                            ],
                        },
                    ],
                },
                {
                    seasonTitle: "انتگرال",

                    lessons: [
                        {
                            episodes: [
                                {
                                    title: "انتگرال نامعین",
                                    attachment: [
                                        {
                                            title: "پی دی اف انتگرال نامعین",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف روش انتگرال گیری",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                                {
                                    title: "انتگرال توابع گویا",
                                    attachment: [
                                        {
                                            title: "پی دی اف انتگرال گویا",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف روش انتگرال گیری",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                            ],
                        },
                        {
                            episodes: [
                                {
                                    title: "انتگرال معین",
                                    attachment: [
                                        {
                                            title: "پی دی اف انتگرال معین",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف روش انتگرال گیری",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                                {
                                    title: "انتگرال توابع گنگ",
                                    attachment: [
                                        {
                                            title: "پی دی اف انتگرال گنگ",
                                            address: "#",
                                        },
                                        {
                                            title: "پی دی اف روش انتگرال گیری توابع گنگ",
                                            address: "#",
                                        },
                                    ],
                                    videos: [
                                        {
                                            address: "#",
                                        },
                                    ],
                                    lessonPlan: "#",
                                    karanbala: "#",
                                    quiz: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    const seasons = courses.filter((element) => element.seasons != null)[0];

    useEffect(() => {
        const season = parseInt(
            Object.keys(seasonVisible)
                .map((element) => element.slice(7))
                .toString()
        );
        if (season) {
            setEpisodes(seasons?.seasons[season - 1]?.lessons);
        }
    }, [seasonVisible]);

    useEffect(() => {
        setEpisodes(seasons?.seasons[1]?.lessons);
    }, []);

    useEffect(() => {
        const myEpisodeArray = seasons?.seasons[1]?.lessons?.map((element: any, index: any) => {
            return {
                id: "parent-episode-" + (index + 1),
                isSelected: false,
            };
        });

        setParentEpisodeVisible(
            myEpisodeArray.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {})
        );

        const myLessonArray = seasons?.seasons[0]?.lessons
            ?.map((element: any, index: any) => {
                return element.episodes.map((el: any, ix: any) => {
                    return {
                        id: "children-episode-index-" + index + "-ix-" + ix,
                        isSelected: false,
                    };
                });
            })
            .flat();

        setChildrenEpisodeVisible(
            myLessonArray.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {})
        );

        const mySeasonArray = seasons?.seasons?.map((value, index) => {
            return {
                id: "season-" + (index + 1),
                isSelected: false,
            };
        });
        setSeasonVisible(
            mySeasonArray.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {})
        );
    }, []);

    useEffect(() => {
        setSeasonVisible((prev: any) => {
            return {
                ["season-" + 1]: !seasonVisible["season-" + 1],
            };
        });
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
                    {seasons?.seasons?.map((value, index) => {
                        return (
                            <Box
                                className={
                                    seasonVisible["season-" + (index + 1)]
                                        ? classes.seasonSelected
                                        : classes.seasons
                                }
                            >
                                <Typography>
                                    فصل {numbers[index + 1]}: {value.seasonTitle}
                                </Typography>
                                <Typography className={classes.arrowLeftParent}>
                                    <IconButton
                                        onClick={(e: any) => {
                                            setSeasonVisible((prev: any) => {
                                                return {
                                                    ["season-" + (index + 1)]:
                                                        !seasonVisible["season-" + (index + 1)],
                                                };
                                            });
                                        }}
                                    >
                                        {seasonVisible["season-" + (index + 1)] ? (
                                            <Box className={` ${classes.arrow} ${classes.down}`} />
                                        ) : (
                                            <ArrowLeftIcon className={classes.arrowLeft} />
                                        )}
                                    </IconButton>
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box className={classes.episodeParent}>
                    {Object.values(episodes).length > 0 &&
                        episodes?.map((value: any, index: any) => {
                            return (
                                <Box key={index} className={classes.episodes}>
                                    <Box className={classes.episodeBoxes}>
                                        <Box className={classes.episodeTitle}>
                                            <Typography>درس {numbers[index + 1]}</Typography>
                                            <Typography>
                                                <IconButton
                                                    onClick={(e: any) => {
                                                        setParentEpisodeVisible((prev: any) => {
                                                            return {
                                                                ...prev,
                                                                ["parent-episode-" + (index + 1)]:
                                                                    !parentEpisodeVisible[
                                                                        "parent-episode-" +
                                                                            (index + 1)
                                                                    ],
                                                            };
                                                        });
                                                    }}
                                                >
                                                    {parentEpisodeVisible[
                                                        "parent-episode-" + (index + 1)
                                                    ] ? (
                                                        <ArrowUpSvg className={classes.arrowDown} />
                                                    ) : (
                                                        <ArrowDownSvg
                                                            className={classes.arrowDown}
                                                        />
                                                    )}
                                                </IconButton>
                                            </Typography>
                                        </Box>
                                        {parentEpisodeVisible["parent-episode-" + (index + 1)] && (
                                            <>
                                                {value?.episodes?.map((value: any, ix: any) => {
                                                    return (
                                                        <Box className={classes.episodeLessons}>
                                                            <Box
                                                                className={
                                                                    classes.episodeLessonTitle
                                                                }
                                                            >
                                                                <Typography>
                                                                    {value?.title}
                                                                </Typography>
                                                                <Typography>
                                                                    <IconButton
                                                                        onClick={(e: any) => {
                                                                            setChildrenEpisodeVisible(
                                                                                (prev: any) => {
                                                                                    return {
                                                                                        ...prev,
                                                                                        ["children-episode-index-" +
                                                                                        index +
                                                                                        "-ix-" +
                                                                                        ix]:
                                                                                            !childrenEpisodeVisible[
                                                                                                "children-episode-index-" +
                                                                                                    index +
                                                                                                    "-ix-" +
                                                                                                    ix
                                                                                            ],
                                                                                    };
                                                                                }
                                                                            );
                                                                        }}
                                                                    >
                                                                        {childrenEpisodeVisible[
                                                                            "children-episode-index-" +
                                                                                index +
                                                                                "-ix-" +
                                                                                ix
                                                                        ] ? (
                                                                            <ArrowUpSvg
                                                                                className={
                                                                                    classes.arrowDown
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            <ArrowDownSvg
                                                                                className={
                                                                                    classes.arrowDown
                                                                                }
                                                                            />
                                                                        )}
                                                                    </IconButton>
                                                                </Typography>
                                                            </Box>
                                                            {childrenEpisodeVisible[
                                                                "children-episode-index-" +
                                                                    index +
                                                                    "-ix-" +
                                                                    ix
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
