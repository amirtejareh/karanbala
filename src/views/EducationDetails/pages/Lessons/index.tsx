import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import {
    ArrowDownSvg,
    ArrowLeftSvg,
    ArrowRightSvg,
    ArrowUpSvg,
    KaranbalaExamSvg,
    KaranbalaLogoTextSvg,
    PointAndTestSvg,
    QuestionsSvg,
    QuizSvg,
    ShowSvg,
    TextBookSvg,
} from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { IconButtonKit } from "../../../../components/kit/IconButton";
import { ModalKit } from "../../../../components/kit/Modal";
import { ModalQuiz } from "../Karanbala";
import EducationDetailStore from "../../../../stores/educationDetailStore";
import useGetLearningMaterialBasedOnBooks from "../../../../hooks/learning-material/useGetLearningMaterialBasedOnBooks";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    course: {
        display: "flex",
        gap: "5rem",
        height: "7rem",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    chapters: {
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
    chapterselected: {
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
    subjects: {
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
    content: { width: "100%" },
    attachment: { width: "100%", display: "flex" },
    video: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "1rem",
    },
    quickAccess: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "1rem",
        "& > div": {
            backgroundColor: theme?.palette?.others.warning.light,
            width: "15rem",
            height: "14rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
        },
        "& svg": {
            width: "50px",
        },
        "& div > svg": {
            backgroundColor: "#fff",
            padding: "5px",
            borderRadius: "1rem",
        },
    },
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

    const { book } = EducationDetailStore();

    const getLearningMaterialBasedOnBooks = useGetLearningMaterialBasedOnBooks([book]);

    useEffect(() => {
        if (!getLearningMaterialBasedOnBooks.isLoading) {
            getLearningMaterialBasedOnBooks.refetch();
        }
    }, [getLearningMaterialBasedOnBooks.data]);

    useEffect(() => {
        const getItems = () => {
            const chapters = [];

            if (getLearningMaterialBasedOnBooks?.data) {
                getLearningMaterialBasedOnBooks?.data?.forEach((mapItem) => {
                    const chapterTitle = mapItem.chapter[0].title;
                    const existingChapter = chapters.find(
                        (chapter) => chapter.chapterTitle === chapterTitle,
                    );

                    if (existingChapter) {
                        mapItem.subject.forEach((subMap) => {
                            const existingSection = existingChapter.sections.find(
                                (section) => section.title === subMap.title,
                            );

                            if (existingSection) {
                                existingSection.attachment.push(
                                    ...subMap.attachment?.map((file) => ({
                                        title: file.title,
                                        address: file.address,
                                    })),
                                );
                            } else {
                                existingChapter.sections.push({
                                    subjects: [
                                        {
                                            title: subMap.title,

                                            karanbala: "#",
                                            lessonPlan: "#",
                                            pointAndTest: "#",
                                            questions: "#",
                                            quiz: "#",
                                            videos:
                                                subMap.videos?.map((video) => ({
                                                    address: video.address ?? "#",
                                                })) ?? "#",
                                        },
                                    ],
                                });
                            }
                        });
                    } else {
                        const sections = mapItem.subject?.map((subMap) => ({
                            subjects: [
                                {
                                    title: subMap.title,
                                    karanbala: "#",
                                    lessonPlan: "#",
                                    pointAndTest: "#",
                                    questions: "#",
                                    quiz: "#",
                                    videos:
                                        subMap.videos?.map((video) => ({
                                            address: video.address ?? "#",
                                        })) ?? "#",
                                },
                            ],
                        }));
                        chapters.push({
                            chapterTitle,
                            sections,
                        });
                    }
                });

                return [
                    {
                        courseTitle: getLearningMaterialBasedOnBooks?.data[0]?.book[0]?.title,
                        chapters,
                    },
                ];
            }
        };

        if (getLearningMaterialBasedOnBooks.data && !getLearningMaterialBasedOnBooks.isLoading) {
            setCourses(getItems());
        }
    }, [getLearningMaterialBasedOnBooks.data]);

    const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
    const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
    const [seasonVisible, setSeasonVisible] = useState<any>({});
    const [subjects, setsubjects] = useState<any>({});
    const [courses, setCourses] = useState<any>();
    const mappedData = getLearningMaterialBasedOnBooks?.data;

    const course = [
        {
            courseTitle: "ریاضی ۱",
            chapters: [
                {
                    chapterTitle: "تابع",
                    sections: [
                        {
                            subjects: [
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
                                            title: "پی دی اف مثلثات مقدماتی (۱) ",
                                            address: "#",
                                        },
                                        {
                                            title: " پی دی اف مثلثات (۲) ",
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
                            subjects: [
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
                                            title: " پی دی اف مثلثات مقدماتی (۳)",
                                            address: "#",
                                        },
                                        {
                                            title: " پی دی اف مثلثات (۴) ",
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
                    chapterTitle: "انتگرال",

                    sections: [
                        {
                            subjects: [
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
                            subjects: [
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

    const chapters = courses?.filter((element) => element?.chapters != null)[0];

    useEffect(() => {
        const season = parseInt(
            Object.keys(seasonVisible)
                ?.map((element) => element.slice(7))
                .toString(),
        );
        if (season) {
            setsubjects(chapters?.chapters[season - 1]?.sections);
        }
    }, [seasonVisible, courses]);

    useEffect(() => {
        setsubjects(chapters?.chapters[1]?.sections);
    }, [courses]);

    useEffect(() => {
        const myEpisodeArray = chapters?.chapters[1]?.sections?.map((element: any, index: any) => {
            return {
                id: "parent-episode-" + (index + 1),
                isSelected: false,
            };
        });

        setParentEpisodeVisible(
            myEpisodeArray?.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {}),
        );

        const myLessonArray = chapters?.chapters[0]?.sections
            ?.map((element: any, index: any) => {
                return element.subjects?.map((el: any, ix: any) => {
                    return {
                        id: "children-episode-index-" + index + "-ix-" + ix,
                        isSelected: false,
                    };
                });
            })
            .flat();

        setChildrenEpisodeVisible(
            myLessonArray?.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {}),
        );

        const mySeasonArray = chapters?.chapters?.map((value, index) => {
            return {
                id: "season-" + (index + 1),
                isSelected: false,
            };
        });
        setSeasonVisible(
            mySeasonArray?.reduce((acc: any, item: any) => {
                acc[item.id] = item.isSelected;
                return acc;
            }, {}),
        );
    }, [courses]);

    useEffect(() => {
        setSeasonVisible((prev: any) => {
            return {
                ["season-" + 1]: !seasonVisible["season-" + 1],
            };
        });
    }, [courses]);

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
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    console.log(chapters);

    return (
        <>
            <ModalKit
                onClose={() => {
                    setModalOpen(false);
                }}
                modalState={modalOpen}
                title={<>آزمون مورد نظر را انتخاب کنید</>}
                maxWidth={"xs"}
            >
                {({ handleApproved }: any) => <ModalQuiz />}
            </ModalKit>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                paddingBottom={"7.5rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"0.8rem"}
            >
                <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
                <Typography fontSize={"3.6rem"} variant="subtitle1">
                    درسنامه
                </Typography>
            </Box>
            <Box className={classes.course}>
                <Box>
                    {chapters?.chapters?.map((value, index) => {
                        return (
                            <Box
                                key={index}
                                className={
                                    seasonVisible["season-" + (index + 1)]
                                        ? classes.chapterselected
                                        : classes.chapters
                                }
                            >
                                <Typography>
                                    فصل {numbers[index + 1]}: {value.chapterTitle}
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
                    {Object.values(subjects ?? [])?.length > 0 &&
                        subjects?.map((value: any, index: any) => {
                            return (
                                <Box key={index} className={classes.subjects}>
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
                                                {value?.subjects?.map((value: any, ix: any) => {
                                                    return (
                                                        <Box
                                                            key={ix}
                                                            className={classes.episodeLessons}
                                                        >
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
                                                                                },
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
                                                                    <Box
                                                                        className={
                                                                            classes.attachment
                                                                        }
                                                                    >
                                                                        {value.attachment?.map(
                                                                            (
                                                                                element: any,
                                                                                index: any,
                                                                            ) => (
                                                                                <Box
                                                                                    key={index}
                                                                                    display={"flex"}
                                                                                    padding={
                                                                                        "0.5rem"
                                                                                    }
                                                                                >
                                                                                    <IconButtonKit
                                                                                        onClick={() =>
                                                                                            navigate(
                                                                                                element.address,
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        <Box
                                                                                            display={
                                                                                                "flex"
                                                                                            }
                                                                                            gap={
                                                                                                "1rem"
                                                                                            }
                                                                                        >
                                                                                            <ShowSvg />
                                                                                            <Typography variant="caption">
                                                                                                {
                                                                                                    element.title
                                                                                                }
                                                                                            </Typography>
                                                                                        </Box>
                                                                                    </IconButtonKit>
                                                                                </Box>
                                                                            ),
                                                                        )}
                                                                    </Box>
                                                                    <Box className={classes.video}>
                                                                        <Box>
                                                                            <IconButton>
                                                                                <ArrowRightSvg />
                                                                            </IconButton>
                                                                        </Box>
                                                                        {Array.isArray(
                                                                            value?.videos,
                                                                        ) &&
                                                                            value?.videos?.map(
                                                                                (
                                                                                    element: any,
                                                                                    key: any,
                                                                                ) => {
                                                                                    return (
                                                                                        <Box
                                                                                            controls
                                                                                            width={
                                                                                                "100%"
                                                                                            }
                                                                                            display={
                                                                                                "flex"
                                                                                            }
                                                                                            flexBasis={
                                                                                                "59%"
                                                                                            }
                                                                                            borderRadius={
                                                                                                "5px"
                                                                                            }
                                                                                            component={
                                                                                                "video"
                                                                                            }
                                                                                        >
                                                                                            <Box
                                                                                                component={
                                                                                                    "source"
                                                                                                }
                                                                                                src={
                                                                                                    element.address
                                                                                                }
                                                                                            ></Box>
                                                                                        </Box>
                                                                                    );
                                                                                },
                                                                            )}

                                                                        <Box>
                                                                            <IconButton>
                                                                                <ArrowLeftSvg />
                                                                            </IconButton>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box
                                                                        display={"flex"}
                                                                        justifyContent={
                                                                            "space-around"
                                                                        }
                                                                    >
                                                                        {Array.of(
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                        )?.map((element) => (
                                                                            <Box
                                                                                onClick={() => {
                                                                                    if (
                                                                                        element ===
                                                                                        3
                                                                                    ) {
                                                                                        setModalOpen(
                                                                                            true,
                                                                                        );
                                                                                    }
                                                                                }}
                                                                            >
                                                                                <IconButton
                                                                                    className={
                                                                                        classes.quickAccess
                                                                                    }
                                                                                >
                                                                                    <Box
                                                                                        flexDirection={
                                                                                            "column"
                                                                                        }
                                                                                    >
                                                                                        <Box>
                                                                                            {element ==
                                                                                            1 ? (
                                                                                                <TextBookSvg />
                                                                                            ) : element ==
                                                                                              2 ? (
                                                                                                <KaranbalaExamSvg />
                                                                                            ) : element ==
                                                                                              3 ? (
                                                                                                <QuizSvg />
                                                                                            ) : element ==
                                                                                              4 ? (
                                                                                                <PointAndTestSvg />
                                                                                            ) : element ==
                                                                                              5 ? (
                                                                                                <QuestionsSvg />
                                                                                            ) : (
                                                                                                ""
                                                                                            )}
                                                                                        </Box>

                                                                                        <Typography variant="subtitle2">
                                                                                            {element ==
                                                                                            1 ? (
                                                                                                <>
                                                                                                    درسنامه
                                                                                                </>
                                                                                            ) : element ==
                                                                                              2 ? (
                                                                                                <>
                                                                                                    کران
                                                                                                    بالا
                                                                                                </>
                                                                                            ) : element ==
                                                                                              3 ? (
                                                                                                <>
                                                                                                    آزمون
                                                                                                    انتخابی
                                                                                                </>
                                                                                            ) : element ==
                                                                                              4 ? (
                                                                                                <>
                                                                                                    نکته
                                                                                                    و
                                                                                                    تست
                                                                                                </>
                                                                                            ) : element ==
                                                                                              5 ? (
                                                                                                <>
                                                                                                    سوالات
                                                                                                    تشریحی
                                                                                                </>
                                                                                            ) : (
                                                                                                ""
                                                                                            )}
                                                                                        </Typography>
                                                                                    </Box>
                                                                                </IconButton>
                                                                            </Box>
                                                                        ))}
                                                                    </Box>
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
