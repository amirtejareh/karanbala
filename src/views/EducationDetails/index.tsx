import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
    AttachSvg,
    BookSavedSvg,
    ExamSvg,
    ExampleSvg,
    KaranbalaExamSvg,
    KaranbalaLogoSvg,
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

    const [selectValue, setSelectValue] = useState(2);

    const option = [
        { title: "ریاضی ۳", value: 0 },
        { title: "ریاضی ۲", value: 1 },
        { title: "ریاضی ۱", value: 2 },
        { title: "فیزیک ۱", value: 3 },
        { title: "فیزیک ۲", value: 4 },
        { title: "فیزیک ۳", value: 5 },
    ];

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

    return (
        <Box margin={"0.75rem 3.25rem 6rem 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"flex-end"} gap={"2rem"}>
                <KaranbalaLogoTextSvg />
            </Box>
            <Box>
                <Box margin={"3.19rem 0 7.5rem 0"}>
                    <SelectKit
                        options={option}
                        label={"انتخاب رشته"}
                        defaultValue={selectValue}
                        onChange={({ target: { value } }) => {
                            const newValue: number = value as number;

                            setSelectValue(newValue);
                        }}
                    ></SelectKit>
                </Box>

                <Box className={`drSamieeBox`} display={"flex"} flexDirection={"column"}>
                    <Box>
                        <Typography variant="subtitle1" fontSize="2rem">
                            پروفسور سمیعی
                        </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            <Typography lineHeight={"3.5rem"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک لورم ایپسوم متن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک وم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک گی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک وم متن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک لورم ایپسوم متن ساختگی با تولید
                            </Typography>
                        </Box>
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
                        <ButtonKit onClick={() => navigate(path[index])}>
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
