import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
    AttachSvg,
    BookSavedSvg,
    ExamSvg,
    ExampleSvg,
    KaranbalaExamSvg,
    KaranbalaLogoTextSvg,
    PointAndTestSvg,
    PracticeSvg,
    QuestionsSvg,
    QuizSvg,
    TextBookSvg,
} from "../../assets";
import { SelectKit } from "../../components/kit/Select";
import DrSamiee from "../../assets/images/drsamiee.png";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { ButtonKit } from "../../components/kit/Button";
import { useNavigate } from "react-router-dom";

import useGetBooksBasedOnGradeLevels from "../../hooks/book/useGetBooksBasedOnGradeLevels";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    educationDetailsBox: {
        "& > button": {
            flexBasis: "22%",
            margin: "0 auto",
            flexGrow: "1",
        },
    },
}));

const MajorRequirements = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const text = [
        "معرفی کتاب",
        "درس نامه",
        "سوالات تشریحی",
        "نکته و تست",
        "ضمائم",
        "آزمون انتخابی",
        "کران بالا",
        "نمونه سوالات امتحانی",
        "تست‌های جامع",
        "تمارین داخل کتاب",
    ];
    const logo = [
        <BookSavedSvg />,
        <TextBookSvg />,
        <QuestionsSvg />,
        <PointAndTestSvg />,
        <AttachSvg />,
        <QuizSvg />,
        <KaranbalaExamSvg />,
        <ExampleSvg />,
        <ExamSvg />,
        <PracticeSvg />,
    ];

    const [selectValue, setSelectValue] = useState();

    const path = [
        "introduction-book",
        "lessons",
        "questions",
        "point-and-test",
        "attach",
        "quiz",
        "karanbala",
        "example",
        "exam",
        "practice",
    ];

    const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels([
        localStorage.getItem("gradeLevel"),
    ]);

    const [books, setBooks] = useState<{ value: number; title: string }[]>();

    useEffect(() => {
        if (!getBooksBasedOnGradeLevels.isLoading) {
            setBooks(
                getBooksBasedOnGradeLevels?.data?.map((elements) => ({
                    value: elements._id,
                    title: elements.title,
                })),
            );
        }
    }, []);

    return (
        <Box margin={"0.75rem 3.25rem 6rem 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"flex-end"} gap={"2rem"}>
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box>
                <Box margin={"3.19rem 0 7.5rem 0"}>
                    <SelectKit
                        options={books}
                        label={"انتخاب کتاب"}
                        defaultValue={selectValue}
                        onChange={({ target: { value } }) => {
                            const newValue: any = value as any;

                            setSelectValue(newValue);
                        }}
                    ></SelectKit>
                </Box>

                <Box
                    className={`drSamieeBox`}
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                >
                    <Box flexBasis={"40%"}>
                        <Typography
                            variant="subtitle1"
                            fontSize="2.5rem"
                            marginTop={"8rem"}
                            marginBottom={"2rem"}
                        >
                            پروفسور سمیعی
                        </Typography>
                        <Typography lineHeight={"3.5rem"}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                            از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                    </Box>
                    <Box flexBasis={"60%"} textAlign={"right"}>
                        <img
                            src={`${DrSamiee}`}
                            alt="dr samieee"
                            width={"273rem"}
                            height={"271rem"}
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                display={"flex"}
                flexWrap={"wrap"}
                gap={"5rem"}
                margin={"7.5rem auto"}
                className={`${classes.educationDetailsBox} ${"educationDetailsBox"}`}
            >
                {text.map((value: string, index: number) => {
                    return (
                        <ButtonKit
                            disabled={books?.length === 0}
                            onClick={() => navigate(path[index])}
                        >
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
        </Box>
    );
};

export default MajorRequirements;
