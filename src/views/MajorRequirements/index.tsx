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

const MajorRequirements = () => {
    const theme: ThemeOptions = useTheme();

    const [selectValue, setSelectValue] = useState(2);

    const option = [
        { title: "ریاضی ۳", value: 0 },
        { title: "ریاضی ۲", value: 1 },
        { title: "ریاضی ۱", value: 2 },
        { title: "فیزیک ۱", value: 3 },
        { title: "فیزیک ۲", value: 4 },
        { title: "فیزیک ۳", value: 5 },
    ];

    return (
        <Box margin={"0.75rem 3.25rem 6rem 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"flex-end"}>
                <KaranbalaLogoSvg />
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
                            console.log(selectValue);

                            setSelectValue(newValue);
                        }}
                    ></SelectKit>
                </Box>

                <Box display={"flex"} flexDirection={"column"}>
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
                sx={{
                    "& > div": {
                        flexBasis: "22%",
                        margin: "0 auto",
                    },
                }}
            >
                <Box
                    width={"27.9rem"}
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
                        <BookSavedSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">معرفی کتاب</Typography>
                    </Box>
                </Box>

                <Box
                    width={"27.9rem"}
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
                        <TextBookSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">درس نامه</Typography>
                    </Box>
                </Box>
                <Box
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
                        <QuestionsSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">سوالات تشریحی</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <PointAndTestSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">نکته و تست</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <AttachSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">ضمائم</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <QuizSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">آزمون انتخابی</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <KaranbalaExamSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">کران بالا</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <ExampleSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">نمونه سوالات امتحانی </Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <ExamSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">تست‌های جامع</Typography>
                    </Box>
                </Box>
                <Box
                    width={"27.9rem"}
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
                        <PracticeSvg />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">تمارین داخل کتاب</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MajorRequirements;
