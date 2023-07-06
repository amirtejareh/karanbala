import React, { useEffect, useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import {
    KaranbalaExamSvg,
    KaranbalaLogoTextSvg,
    PointAndTestSvg,
    QuestionsSvg,
    QuizSvg,
    TextBookSvg,
} from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { SelectKit } from "../../../../components/kit/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    QuizBox: {
        "& > button": {
            flexBasis: "15%",
        },
    },
}));
const Quiz = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    const [examValue, setExamValue] = useState(2);
    const [quizValue, setQuizValue] = useState(2);
    const [examTypeValue, setExamTypeValue] = useState(2);
    const [seasonValue, setSeasonValue] = useState(1);
    const [lessonValue, setLessonValue] = useState(1);
    const [episodeValue, setEpisodeValue] = useState(1);
    const [showItem, setShowItem] = useState<boolean | undefined>(undefined);
    const classes = useStyles();

    const option = [
        { title: "ترم اول ", value: 0 },
        { title: "ترم دوم ", value: 1 },
    ];
    const examType = [
        { title: "تستی", value: 0 },
        { title: "تشریحی ", value: 1 },
    ];

    const season = [
        { title: "فصل۱: تابع", value: 0 },
        { title: "فصل۲: مثلثات", value: 1 },
    ];

    const exam = [
        { title: "تستی", value: 0 },
        { title: "تشریحی", value: 1 },
    ];

    const lesson = [
        { title: "درس اول", value: 0 },
        { title: "درس دوم", value: 1 },
    ];

    const episode = [
        { title: "تابع پیوسته", value: 0 },
        { title: "تابع گسسته", value: 1 },
    ];

    const text = ["کران بالا", "درس نامه", "سوالات تشریحی", "نکته و تست"];
    const logo = [<KaranbalaExamSvg />, <TextBookSvg />, <QuestionsSvg />, <PointAndTestSvg />];

    const path = ["karanbala", "lessons", "questions", "point-and-test"];

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (showItem != undefined) {
            localStorage.setItem("examType", showItem ? "topic" : "standard");
        } else {
            if (localStorage.getItem("examType")) {
                setShowItem(localStorage.getItem("examType") === "topic" ? true : false);
            } else {
                setShowItem(true);
            }
        }
    }, [showItem]);

    const generateExam = (exam: number) => {
        const examNumbers = Array.from({ length: exam }, (_, i) => i + 1);
        return examNumbers.map((element: any, index: number) => {
            return (
                <Box key={index} margin={"5rem 0"} paddingBottom={"5rem"}>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        width={"17.35rem"}
                        bgcolor={theme?.palette?.others.warning.light}
                        padding={"1rem"}
                        borderRadius={"1rem"}
                    >
                        <Box
                            bgcolor={theme?.palette?.common.white}
                            padding={"1rem"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            borderRadius={"1rem"}
                        >
                            <QuizSvg />
                        </Box>
                        <Box margin={"1rem"}>
                            <Typography variant="subtitle1">آزمون {index + 1}</Typography>
                        </Box>
                    </Box>
                </Box>
            );
        });
    };

    const generateCustomRadioGroup = (choices: {}, defaultValue?: string) => {
        return (
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={localStorage.getItem("examType") ?? Object.keys(choices)[0]}
                name="radio-buttons-group"
            >
                {Object.entries(choices).map(([key, value]) => {
                    return (
                        <FormControl key={key}>
                            <FormControlLabel
                                sx={{
                                    "& > span:nth-of-type(2)": {
                                        width: "17.6rem",
                                        height: "13.2rem",
                                        bgcolor: theme?.palette?.others.warning.light,
                                        borderRadius: "1rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "2rem 0",
                                    },
                                }}
                                value={key}
                                control={<Radio />}
                                onChange={(element: any) => {
                                    setShowItem(
                                        element.target.defaultValue === "topic" ? true : false
                                    );
                                }}
                                label={
                                    <Box
                                        flexDirection={"column"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        display={"flex"}
                                        sx={{
                                            "&>div:nth-of-type(1)": {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            },
                                        }}
                                    >
                                        <Box
                                            bgcolor={theme?.palette?.common.white}
                                            padding={"1rem"}
                                            borderRadius={"1rem"}
                                        >
                                            <QuizSvg />
                                        </Box>
                                        <Box margin={"1rem"}>
                                            <Typography variant="subtitle1">
                                                <>{value}</>
                                            </Typography>
                                        </Box>
                                    </Box>
                                }
                            />
                        </FormControl>
                    );
                })}
            </RadioGroup>
        );
    };

    return (
        <Box paddingBottom={"1rem"}>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"2rem"}
            >
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"4rem 5.2rem 0  5.2rem"}>
                <Typography variant="subtitle1">آزمون مورد نظر را انتخاب کنید </Typography>
            </Box>
            <Box margin={"3.5rem 5.2rem 8rem  5.2rem"}>
                <Box display={"flex"}>
                    {generateCustomRadioGroup({
                        topic: "آزمون موضوعی",
                        standard: "آزمون استاندارد",
                    })}
                </Box>
                {!showItem ? (
                    <>
                        <Box gap={"3rem"} display={"flex"} flexWrap={"wrap"}>
                            <Box width={"25%"} sx={{ "& > label": { margin: "1rem 0" } }}>
                                <SelectKit
                                    options={option}
                                    label={"آزمون درسی خود را انتخاب کنید"}
                                    defaultValue={examValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;

                                        setExamValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                            <Box flexBasis={"25%"} sx={{ "& > label": { margin: "1rem 0" } }}>
                                <SelectKit
                                    options={examType}
                                    label={"نوع آزمون را انتخاب کنید"}
                                    defaultValue={examTypeValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;

                                        setExamTypeValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
                            {generateExam(6)}
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} margin={"5rem 0"}>
                            <ButtonKit variant="contained">
                                <Typography>مشاهده آزمون</Typography>
                            </ButtonKit>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box
                            borderBottom={"1px solid grey"}
                            marginBottom={"5rem"}
                            marginTop={"2rem"}
                        ></Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-around"}
                            borderBottom={"1px solid grey"}
                            paddingBottom={"5rem"}
                            marginTop={"2rem"}
                            gap={"1rem"}
                            sx={{
                                "&  label": { margin: "1rem 0", height: "23px" },
                                "& > div": { flexBasis: "40%" },
                            }}
                        >
                            <Box>
                                <SelectKit
                                    options={season}
                                    label={"موضوع مورد نظر خود را انتخاب کنید"}
                                    defaultValue={examValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;

                                        setSeasonValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                            <Box>
                                <SelectKit
                                    options={lesson}
                                    label={" "}
                                    defaultValue={lessonValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;

                                        setLessonValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                            <Box>
                                <SelectKit
                                    options={episode}
                                    label={""}
                                    defaultValue={episodeValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;

                                        setEpisodeValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems={"end"}
                            gap={"5rem"}
                            marginBottom={"5rem"}
                            marginTop={"2rem"}
                        >
                            <Box
                                sx={{
                                    "& > label": { margin: "1rem 0" },
                                }}
                                flexBasis={"30%"}
                            >
                                <SelectKit
                                    options={exam}
                                    label={"نوع و سطح آزمون را انتخاب کنید"}
                                    defaultValue={quizValue}
                                    onChange={({ target: { value } }) => {
                                        const newValue: number = value as number;
                                        setQuizValue(newValue);
                                    }}
                                ></SelectKit>
                            </Box>
                            <Box>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="easy"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="hard"
                                            control={<Radio />}
                                            label="سخت"
                                        />
                                        <FormControlLabel
                                            value="normal"
                                            control={<Radio />}
                                            label="متوسط"
                                        />
                                        <FormControlLabel
                                            value="easy"
                                            control={<Radio />}
                                            label="آسان"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box>
                            <Box display={"flex"} justifyContent={"center"} margin={"5rem 0"}>
                                <ButtonKit variant="contained">
                                    <Typography>مشاهده آزمون</Typography>
                                </ButtonKit>
                            </Box>
                        </Box>
                        <Box
                            display={"flex"}
                            flexWrap={"wrap"}
                            gap={"5rem"}
                            justifyContent={"center"}
                            margin={"7.5rem auto"}
                            className={`${classes.QuizBox}`}
                        >
                            {text.map((value: string, index: number) => {
                                return (
                                    <ButtonKit key={index} onClick={() => navigate(path[index])}>
                                        <Box
                                            width={"100%"}
                                            height={"16rem"}
                                            display={"flex"}
                                            borderRadius={"2rem"}
                                            flexDirection={"column"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            bgcolor={theme?.palette?.others.info.light}
                                        >
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                width={"5rem"}
                                                height={"5rem"}
                                                margin={"1rem"}
                                                bgcolor={theme?.palette?.common.white}
                                                borderRadius={"1rem"}
                                                padding={"1rem"}
                                            >
                                                {logo[index]}
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1">{value}</Typography>
                                            </Box>
                                        </Box>
                                    </ButtonKit>
                                );
                            })}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Quiz;
