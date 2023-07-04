import React, { useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg, QuizSvg } from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { SelectKit } from "../../../../components/kit/Select";

const Quiz = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    const [examValue, setExamValue] = useState(2);
    const [examTypeValue, setExamTypeValue] = useState(2);

    const option = [
        { title: "ترم اول ", value: 0 },
        { title: "ترم دوم ", value: 1 },
    ];
    const examType = [
        { title: "تستی", value: 0 },
        { title: "تشریحی ", value: 1 },
    ];

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

    const generateCustomRadioGroup = (choices: any, defaultValue?: string) => {
        return (
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={"topic" ?? Object.keys(choices)[0]}
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
        <Box>
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
            </Box>
        </Box>
    );
};

export default Quiz;
