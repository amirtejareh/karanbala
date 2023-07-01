import React, { useEffect, useState } from "react";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
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
import { CheckboxKit } from "../../../../components/kit/Checkbox";
import { ModalKit } from "../../../../components/kit/Modal";

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
        flexBasis: "100%",
        backgroundColor: theme?.palette?.grey["A100"],
        border: `1px solid ${theme?.palette?.grey["200"]}`,
        borderRadius: "1rem",
        padding: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    episodeTitle: {
        display: "flex",
        padding: "1.5rem 2.5rem",
        borderRadius: "1rem",
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

const ModalExam = () => {
    const theme: ThemeOptions = useTheme();

    return (
        <Box>
            <Box>
                <Typography>سوال مشابه ۱</Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="جواب ۱"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="جواب ۱" control={<Radio />} label="جواب ۱" />
                            <FormControlLabel value="جواب ۲" control={<Radio />} label="جواب ۲" />
                            <FormControlLabel value="جواب ۳" control={<Radio />} label="جواب ۳" />
                            <FormControlLabel value="جواب ۴" control={<Radio />} label="جواب ۴" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                borderBottom={"1px solid grey"}
                paddingBottom={"25px"}
                marginBottom={"3rem"}
            >
                <Box>
                    <Typography>پاسخنامه</Typography>
                </Box>
                <Box>
                    <Typography>
                        <ArrowLeftIcon />
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography>سوال مشابه ۲</Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="جواب ۲"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="جواب ۱" control={<Radio />} label="جواب ۱" />
                            <FormControlLabel value="جواب ۲" control={<Radio />} label="جواب ۲" />
                            <FormControlLabel value="جواب ۳" control={<Radio />} label="جواب ۳" />
                            <FormControlLabel value="جواب ۴" control={<Radio />} label="جواب ۴" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography>پاسخنامه</Typography>
                </Box>
                <Box>
                    <Typography>
                        <ArrowLeftIcon />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const Exam = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();

    const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
    const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
    const [seasonVisible, setSeasonVisible] = useState<any>({});
    const [episodes, setEpisodes] = useState<any>({});
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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
    const navigate = useNavigate();
    return (
        <>
            {" "}
            <ModalKit
                onClose={() => {
                    setModalOpen(false);
                }}
                modalState={modalOpen}
                title={<>سوال مشابه</>}
                maxWidth={"sm"}
            >
                {({ handleApproved }: any) => <ModalExam />}
            </ModalKit>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                paddingBottom={"7.5rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"2rem"}
            >
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
                <Typography fontSize={"3.6rem"} variant="subtitle1">
                    تست های جامع
                </Typography>
            </Box>
            <Box className={classes.courses}>
                <Box>
                    {seasons?.seasons?.map((value, index) => {
                        return (
                            <Box
                                key={index}
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
                    <Box className={classes.episodes}>
                        <Box className={classes.episodeBoxes}>
                            <Box
                                width={"100%"}
                                bgcolor={theme?.palette?.grey["100"]}
                                padding={"2rem"}
                                borderRadius={"1rem"}
                            >
                                <Box
                                    display={"flex"}
                                    justifyContent={"space-around"}
                                    width={"100%"}
                                >
                                    <Typography>تعداد سوالات اصلی: ۳۴</Typography>
                                    <Typography>تعداد سوالات مشابه: ۳۴</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>۱- سوال مربوط به آزمون</Typography>
                            </Box>
                            <Box>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="جواب ۱"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="جواب ۱"
                                            control={<Radio />}
                                            label="جواب ۱"
                                        />
                                        <FormControlLabel
                                            value="جواب ۲"
                                            control={<Radio />}
                                            label="جواب ۲"
                                        />
                                        <FormControlLabel
                                            value="جواب ۳"
                                            control={<Radio />}
                                            label="جواب ۳"
                                        />
                                        <FormControlLabel
                                            value="جواب ۴"
                                            control={<Radio />}
                                            label="جواب ۴"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box>
                                <svg
                                    width="212"
                                    height="50"
                                    viewBox="0 0 212 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_451_3422)">
                                        <rect width="212" height="50" rx="8" fill="#DAE4ED" />
                                        <path
                                            d="M20 25V21.44C20 17.02 23.13 15.21 26.96 17.42L30.05 19.2L33.14 20.98C36.97 23.19 36.97 26.81 33.14 29.02L30.05 30.8L26.96 32.58C23.13 34.79 20 32.98 20 28.56V25Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <circle cx="59" cy="25" r="4" fill="#1D252F" />
                                        <path
                                            d="M69.2646 27C68.8166 27 68.5926 26.7527 68.5926 26.258C68.5926 25.7633 68.8166 25.516 69.2646 25.516C69.7126 25.516 69.9366 25.7633 69.9366 26.258C69.9366 26.7527 69.7126 27 69.2646 27ZM72.3408 27C71.8928 27 71.6688 26.7527 71.6688 26.258C71.6688 25.7633 71.8928 25.516 72.3408 25.516C72.7888 25.516 73.0128 25.7633 73.0128 26.258C73.0128 26.7527 72.7888 27 72.3408 27ZM75.417 27C74.969 27 74.745 26.7527 74.745 26.258C74.745 25.7633 74.969 25.516 75.417 25.516C75.865 25.516 76.089 25.7633 76.089 26.258C76.089 26.7527 75.865 27 75.417 27ZM78.4931 27C78.0451 27 77.8211 26.7527 77.8211 26.258C77.8211 25.7633 78.0451 25.516 78.4931 25.516C78.9411 25.516 79.1651 25.7633 79.1651 26.258C79.1651 26.7527 78.9411 27 78.4931 27ZM81.5693 27C81.1213 27 80.8973 26.7527 80.8973 26.258C80.8973 25.7633 81.1213 25.516 81.5693 25.516C82.0173 25.516 82.2413 25.7633 82.2413 26.258C82.2413 26.7527 82.0173 27 81.5693 27ZM84.6455 27C84.1975 27 83.9735 26.7527 83.9735 26.258C83.9735 25.7633 84.1975 25.516 84.6455 25.516C85.0935 25.516 85.3175 25.7633 85.3175 26.258C85.3175 26.7527 85.0935 27 84.6455 27ZM87.7216 27C87.2736 27 87.0496 26.7527 87.0496 26.258C87.0496 25.7633 87.2736 25.516 87.7216 25.516C88.1696 25.516 88.3936 25.7633 88.3936 26.258C88.3936 26.7527 88.1696 27 87.7216 27ZM90.7978 27C90.3498 27 90.1258 26.7527 90.1258 26.258C90.1258 25.7633 90.3498 25.516 90.7978 25.516C91.2458 25.516 91.4698 25.7633 91.4698 26.258C91.4698 26.7527 91.2458 27 90.7978 27ZM93.874 27C93.426 27 93.202 26.7527 93.202 26.258C93.202 25.7633 93.426 25.516 93.874 25.516C94.322 25.516 94.546 25.7633 94.546 26.258C94.546 26.7527 94.322 27 93.874 27ZM96.9502 27C96.5022 27 96.2782 26.7527 96.2782 26.258C96.2782 25.7633 96.5022 25.516 96.9502 25.516C97.3982 25.516 97.6222 25.7633 97.6222 26.258C97.6222 26.7527 97.3982 27 96.9502 27ZM100.026 27C99.5783 27 99.3543 26.7527 99.3543 26.258C99.3543 25.7633 99.5783 25.516 100.026 25.516C100.474 25.516 100.698 25.7633 100.698 26.258C100.698 26.7527 100.474 27 100.026 27ZM103.103 27C102.655 27 102.431 26.7527 102.431 26.258C102.431 25.7633 102.655 25.516 103.103 25.516C103.551 25.516 103.775 25.7633 103.775 26.258C103.775 26.7527 103.551 27 103.103 27ZM106.179 27C105.731 27 105.507 26.7527 105.507 26.258C105.507 25.7633 105.731 25.516 106.179 25.516C106.627 25.516 106.851 25.7633 106.851 26.258C106.851 26.7527 106.627 27 106.179 27ZM109.255 27C108.807 27 108.583 26.7527 108.583 26.258C108.583 25.7633 108.807 25.516 109.255 25.516C109.703 25.516 109.927 25.7633 109.927 26.258C109.927 26.7527 109.703 27 109.255 27ZM112.331 27C111.883 27 111.659 26.7527 111.659 26.258C111.659 25.7633 111.883 25.516 112.331 25.516C112.779 25.516 113.003 25.7633 113.003 26.258C113.003 26.7527 112.779 27 112.331 27ZM115.407 27C114.959 27 114.735 26.7527 114.735 26.258C114.735 25.7633 114.959 25.516 115.407 25.516C115.855 25.516 116.079 25.7633 116.079 26.258C116.079 26.7527 115.855 27 115.407 27ZM118.483 27C118.035 27 117.811 26.7527 117.811 26.258C117.811 25.7633 118.035 25.516 118.483 25.516C118.931 25.516 119.155 25.7633 119.155 26.258C119.155 26.7527 118.931 27 118.483 27ZM121.56 27C121.112 27 120.888 26.7527 120.888 26.258C120.888 25.7633 121.112 25.516 121.56 25.516C122.008 25.516 122.232 25.7633 122.232 26.258C122.232 26.7527 122.008 27 121.56 27ZM124.636 27C124.188 27 123.964 26.7527 123.964 26.258C123.964 25.7633 124.188 25.516 124.636 25.516C125.084 25.516 125.308 25.7633 125.308 26.258C125.308 26.7527 125.084 27 124.636 27ZM127.712 27C127.264 27 127.04 26.7527 127.04 26.258C127.04 25.7633 127.264 25.516 127.712 25.516C128.16 25.516 128.384 25.7633 128.384 26.258C128.384 26.7527 128.16 27 127.712 27ZM130.788 27C130.34 27 130.116 26.7527 130.116 26.258C130.116 25.7633 130.34 25.516 130.788 25.516C131.236 25.516 131.46 25.7633 131.46 26.258C131.46 26.7527 131.236 27 130.788 27ZM133.864 27C133.416 27 133.192 26.7527 133.192 26.258C133.192 25.7633 133.416 25.516 133.864 25.516C134.312 25.516 134.536 25.7633 134.536 26.258C134.536 26.7527 134.312 27 133.864 27ZM136.94 27C136.492 27 136.268 26.7527 136.268 26.258C136.268 25.7633 136.492 25.516 136.94 25.516C137.388 25.516 137.612 25.7633 137.612 26.258C137.612 26.7527 137.388 27 136.94 27ZM140.017 27C139.569 27 139.345 26.7527 139.345 26.258C139.345 25.7633 139.569 25.516 140.017 25.516C140.465 25.516 140.689 25.7633 140.689 26.258C140.689 26.7527 140.465 27 140.017 27ZM143.093 27C142.645 27 142.421 26.7527 142.421 26.258C142.421 25.7633 142.645 25.516 143.093 25.516C143.541 25.516 143.765 25.7633 143.765 26.258C143.765 26.7527 143.541 27 143.093 27ZM146.169 27C145.721 27 145.497 26.7527 145.497 26.258C145.497 25.7633 145.721 25.516 146.169 25.516C146.617 25.516 146.841 25.7633 146.841 26.258C146.841 26.7527 146.617 27 146.169 27ZM149.245 27C148.797 27 148.573 26.7527 148.573 26.258C148.573 25.7633 148.797 25.516 149.245 25.516C149.693 25.516 149.917 25.7633 149.917 26.258C149.917 26.7527 149.693 27 149.245 27ZM152.321 27C151.873 27 151.649 26.7527 151.649 26.258C151.649 25.7633 151.873 25.516 152.321 25.516C152.769 25.516 152.993 25.7633 152.993 26.258C152.993 26.7527 152.769 27 152.321 27ZM155.397 27C154.949 27 154.725 26.7527 154.725 26.258C154.725 25.7633 154.949 25.516 155.397 25.516C155.845 25.516 156.069 25.7633 156.069 26.258C156.069 26.7527 155.845 27 155.397 27ZM158.474 27C158.026 27 157.802 26.7527 157.802 26.258C157.802 25.7633 158.026 25.516 158.474 25.516C158.922 25.516 159.146 25.7633 159.146 26.258C159.146 26.7527 158.922 27 158.474 27ZM161.55 27C161.102 27 160.878 26.7527 160.878 26.258C160.878 25.7633 161.102 25.516 161.55 25.516C161.998 25.516 162.222 25.7633 162.222 26.258C162.222 26.7527 161.998 27 161.55 27ZM164.626 27C164.178 27 163.954 26.7527 163.954 26.258C163.954 25.7633 164.178 25.516 164.626 25.516C165.074 25.516 165.298 25.7633 165.298 26.258C165.298 26.7527 165.074 27 164.626 27ZM167.702 27C167.254 27 167.03 26.7527 167.03 26.258C167.03 25.7633 167.254 25.516 167.702 25.516C168.15 25.516 168.374 25.7633 168.374 26.258C168.374 26.7527 168.15 27 167.702 27ZM170.778 27C170.33 27 170.106 26.7527 170.106 26.258C170.106 25.7633 170.33 25.516 170.778 25.516C171.226 25.516 171.45 25.7633 171.45 26.258C171.45 26.7527 171.226 27 170.778 27ZM173.854 27C173.406 27 173.182 26.7527 173.182 26.258C173.182 25.7633 173.406 25.516 173.854 25.516C174.302 25.516 174.526 25.7633 174.526 26.258C174.526 26.7527 174.302 27 173.854 27ZM176.931 27C176.483 27 176.259 26.7527 176.259 26.258C176.259 25.7633 176.483 25.516 176.931 25.516C177.379 25.516 177.603 25.7633 177.603 26.258C177.603 26.7527 177.379 27 176.931 27ZM180.007 27C179.559 27 179.335 26.7527 179.335 26.258C179.335 25.7633 179.559 25.516 180.007 25.516C180.455 25.516 180.679 25.7633 180.679 26.258C180.679 26.7527 180.455 27 180.007 27ZM183.083 27C182.635 27 182.411 26.7527 182.411 26.258C182.411 25.7633 182.635 25.516 183.083 25.516C183.531 25.516 183.755 25.7633 183.755 26.258C183.755 26.7527 183.531 27 183.083 27ZM186.159 27C185.711 27 185.487 26.7527 185.487 26.258C185.487 25.7633 185.711 25.516 186.159 25.516C186.607 25.516 186.831 25.7633 186.831 26.258C186.831 26.7527 186.607 27 186.159 27ZM189.235 27C188.787 27 188.563 26.7527 188.563 26.258C188.563 25.7633 188.787 25.516 189.235 25.516C189.683 25.516 189.907 25.7633 189.907 26.258C189.907 26.7527 189.683 27 189.235 27ZM192.311 27C191.863 27 191.639 26.7527 191.639 26.258C191.639 25.7633 191.863 25.516 192.311 25.516C192.759 25.516 192.983 25.7633 192.983 26.258C192.983 26.7527 192.759 27 192.311 27ZM195.388 27C194.94 27 194.716 26.7527 194.716 26.258C194.716 25.7633 194.94 25.516 195.388 25.516C195.836 25.516 196.06 25.7633 196.06 26.258C196.06 26.7527 195.836 27 195.388 27ZM198.464 27C198.016 27 197.792 26.7527 197.792 26.258C197.792 25.7633 198.016 25.516 198.464 25.516C198.912 25.516 199.136 25.7633 199.136 26.258C199.136 26.7527 198.912 27 198.464 27Z"
                                            fill="#818B98"
                                        />
                                        <path
                                            d="M60.9654 41.244C60.9654 41.9 60.8934 42.472 60.7494 42.96C60.6134 43.44 60.4214 43.84 60.1734 44.16C59.9254 44.472 59.6374 44.704 59.3094 44.856C58.9814 45.008 58.6254 45.084 58.2414 45.084C57.8574 45.084 57.5014 45.008 57.1734 44.856C56.8454 44.704 56.5574 44.472 56.3094 44.16C56.0694 43.84 55.8774 43.44 55.7334 42.96C55.5974 42.472 55.5294 41.9 55.5294 41.244C55.5294 40.588 55.5974 40.02 55.7334 39.54C55.8774 39.052 56.0694 38.648 56.3094 38.328C56.5574 38.008 56.8454 37.772 57.1734 37.62C57.5014 37.468 57.8574 37.392 58.2414 37.392C58.6254 37.392 58.9814 37.468 59.3094 37.62C59.6374 37.772 59.9254 38.008 60.1734 38.328C60.4214 38.648 60.6134 39.052 60.7494 39.54C60.8934 40.02 60.9654 40.588 60.9654 41.244ZM60.1494 41.244C60.1494 40.652 60.0974 40.152 59.9934 39.744C59.8894 39.336 59.7494 39.004 59.5734 38.748C59.3974 38.492 59.1934 38.308 58.9614 38.196C58.7294 38.084 58.4894 38.028 58.2414 38.028C57.9854 38.028 57.7414 38.084 57.5094 38.196C57.2774 38.308 57.0734 38.492 56.8974 38.748C56.7294 39.004 56.5934 39.336 56.4894 39.744C56.3854 40.152 56.3334 40.652 56.3334 41.244C56.3334 41.836 56.3854 42.336 56.4894 42.744C56.5934 43.144 56.7294 43.472 56.8974 43.728C57.0734 43.984 57.2774 44.168 57.5094 44.28C57.7414 44.392 57.9854 44.448 58.2414 44.448C58.4894 44.448 58.7294 44.392 58.9614 44.28C59.1934 44.168 59.3974 43.984 59.5734 43.728C59.7494 43.472 59.8894 43.144 59.9934 42.744C60.0974 42.336 60.1494 41.836 60.1494 41.244ZM64.5505 37.464V45H63.7705V38.892C63.7705 38.812 63.7705 38.736 63.7705 38.664C63.7705 38.592 63.7745 38.512 63.7825 38.424L62.4625 39.624C62.3985 39.68 62.3185 39.708 62.2225 39.708C62.1265 39.708 62.0545 39.672 62.0065 39.6L61.7785 39.336L63.9145 37.464H64.5505ZM66.9723 42.096C66.5883 42.096 66.3963 41.884 66.3963 41.46C66.3963 41.036 66.5883 40.824 66.9723 40.824C67.3563 40.824 67.5483 41.036 67.5483 41.46C67.5483 41.884 67.3563 42.096 66.9723 42.096ZM66.9723 45C66.5883 45 66.3963 44.788 66.3963 44.364C66.3963 43.94 66.5883 43.728 66.9723 43.728C67.3563 43.728 67.5483 43.94 67.5483 44.364C67.5483 44.788 67.3563 45 66.9723 45ZM71.2771 37.464V45H70.4971V38.892C70.4971 38.812 70.4971 38.736 70.4971 38.664C70.4971 38.592 70.5011 38.512 70.5091 38.424L69.1891 39.624C69.1251 39.68 69.0451 39.708 68.9491 39.708C68.8531 39.708 68.7811 39.672 68.7331 39.6L68.5051 39.336L70.6411 37.464H71.2771ZM78.4029 41.244C78.4029 41.9 78.3309 42.472 78.1869 42.96C78.0509 43.44 77.8589 43.84 77.6109 44.16C77.3629 44.472 77.0749 44.704 76.7469 44.856C76.4189 45.008 76.0629 45.084 75.6789 45.084C75.2949 45.084 74.9389 45.008 74.6109 44.856C74.2829 44.704 73.9949 44.472 73.7469 44.16C73.5069 43.84 73.3149 43.44 73.1709 42.96C73.0349 42.472 72.9669 41.9 72.9669 41.244C72.9669 40.588 73.0349 40.02 73.1709 39.54C73.3149 39.052 73.5069 38.648 73.7469 38.328C73.9949 38.008 74.2829 37.772 74.6109 37.62C74.9389 37.468 75.2949 37.392 75.6789 37.392C76.0629 37.392 76.4189 37.468 76.7469 37.62C77.0749 37.772 77.3629 38.008 77.6109 38.328C77.8589 38.648 78.0509 39.052 78.1869 39.54C78.3309 40.02 78.4029 40.588 78.4029 41.244ZM77.5869 41.244C77.5869 40.652 77.5349 40.152 77.4309 39.744C77.3269 39.336 77.1869 39.004 77.0109 38.748C76.8349 38.492 76.6309 38.308 76.3989 38.196C76.1669 38.084 75.9269 38.028 75.6789 38.028C75.4229 38.028 75.1789 38.084 74.9469 38.196C74.7149 38.308 74.5109 38.492 74.3349 38.748C74.1669 39.004 74.0309 39.336 73.9269 39.744C73.8229 40.152 73.7709 40.652 73.7709 41.244C73.7709 41.836 73.8229 42.336 73.9269 42.744C74.0309 43.144 74.1669 43.472 74.3349 43.728C74.5109 43.984 74.7149 44.168 74.9469 44.28C75.1789 44.392 75.4229 44.448 75.6789 44.448C75.9269 44.448 76.1669 44.392 76.3989 44.28C76.6309 44.168 76.8349 43.984 77.0109 43.728C77.1869 43.472 77.3269 43.144 77.4309 42.744C77.5349 42.336 77.5869 41.836 77.5869 41.244Z"
                                            fill="#1D252F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_451_3422">
                                            <rect width="212" height="50" rx="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Box>
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                                gap={"1rem"}
                                flexWrap={"wrap"}
                            >
                                <ButtonKit size="large" variant="contained">
                                    <Typography></Typography>سوال بعدی
                                </ButtonKit>
                                <ButtonKit
                                    onClick={() => {
                                        setModalOpen(!modalOpen);
                                    }}
                                    size="large"
                                    variant="contained"
                                >
                                    <Typography></Typography>سوال مشابه
                                </ButtonKit>
                                <ButtonKit size="large" variant="contained">
                                    <Typography></Typography>سوال قبلی
                                </ButtonKit>
                            </Box>
                            <Box
                                margin={"1rem 0 0 0"}
                                display={"flex"}
                                justifyContent={"space-around"}
                            >
                                <ButtonKit size="large" variant="outlined">
                                    <Typography></Typography>
                                    اتمام دور فعلی
                                </ButtonKit>
                                <ButtonKit size="large" variant="outlined">
                                    <Typography></Typography>
                                    شروع دور جدید
                                </ButtonKit>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Exam;
