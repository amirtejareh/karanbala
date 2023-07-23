import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoTextSvg } from "../../../assets";
import { SelectKit } from "../../../components/kit/Select";

const SubjectiveTest = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    const [selectValue, setSelectValue] = useState(2);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const option = [
        { title: "ریاضی ۳", value: 0 },
        { title: "ریاضی ۲", value: 1 },
        { title: "ریاضی ۱", value: 2 },
        { title: "فیزیک ۱", value: 3 },
        { title: "فیزیک ۲", value: 4 },
        { title: "فیزیک ۳", value: 5 },
    ];
    return (
        <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"end"}>
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"3.19rem 0 0 0"}>
                <SelectKit
                    options={option}
                    label={""}
                    defaultValue={selectValue}
                    onChange={({ target: { value } }) => {
                        const newValue: number = value as number;

                        setSelectValue(newValue);
                    }}
                ></SelectKit>
            </Box>
            <Box
                margin={"2rem 0"}
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                <Box flexGrow={1} margin={"2rem 0"}>
                    <Box>
                        <ButtonKit fullWidth variant="contained">
                            <Typography>آزمون بعدی</Typography>
                        </ButtonKit>
                    </Box>
                    <Box
                        sx={{ "& button": { flexGrow: 1 } }}
                        marginTop={"2rem"}
                        display={"flex"}
                        gap={"0.5rem"}
                    >
                        <ButtonKit variant="contained">
                            <Typography>1</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>2</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>3</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>4</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>5</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>6</Typography>
                        </ButtonKit>
                    </Box>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    display={"flex"}
                    flexWrap={"wrap"}
                    flexGrow={1}
                    margin={"2rem 0"}
                >
                    <Typography fontSize={"3.6rem"} variant="subtitle1">
                        آزمون شماره ۷
                    </Typography>
                </Box>
                <Box margin={"2rem 0"} textAlign={"right"} flexGrow={1} flexWrap={"wrap"}>
                    <Box>
                        <ButtonKit fullWidth variant="contained">
                            <Typography>آزمون قبلی</Typography>
                        </ButtonKit>
                    </Box>
                    <Box
                        sx={{ "& button": { flexGrow: 1 } }}
                        marginTop={"2rem"}
                        display={"flex"}
                        gap={"0.5rem"}
                        justifyContent={"end"}
                    >
                        <ButtonKit variant="contained">
                            <Typography>1</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>2</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>3</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>4</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>5</Typography>
                        </ButtonKit>
                        <ButtonKit variant="contained">
                            <Typography>6</Typography>
                        </ButtonKit>
                    </Box>
                </Box>
            </Box>
            <Box
                bgcolor={theme?.palette?.grey[100]}
                display={"flex"}
                justifyContent={"space-between"}
                borderRadius={"1rem"}
                padding={"2rem"}
            >
                <Box display={"flex"}>
                    <Typography>پایه تحصیلی: </Typography>
                    <Typography>دهم</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography>مدت پاسخگویی: </Typography>
                    <Typography>۸۰ دقیقه</Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography>زمان فعال شدن آزمون: </Typography>
                    <Typography>چهارشنبه ۲۱ تیرماه ۱۴۰۲ - ساعت ۱۴:۴۵</Typography>
                </Box>{" "}
            </Box>

            <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ "& div": { flexBasis: "30%", padding: "2rem 0" } }}
                gap={"2rem"}
                margin={"2rem 0"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    borderRadius={"1rem"}
                    bgcolor={theme?.palette?.grey[100]}
                >
                    <Typography variant="subtitle1">بودجه بندی آزمون</Typography>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    borderRadius={"1rem"}
                    bgcolor={theme?.palette?.grey[100]}
                >
                    <Typography variant="subtitle1">پاسخنامه آزمون</Typography>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    borderRadius={"1rem"}
                    bgcolor={theme?.palette?.grey[100]}
                >
                    <Typography variant="subtitle1">کارنامه-تحلیل-نمودارهای پیشرفت</Typography>
                </Box>
            </Box>
            <Box borderRadius={"1rem"} padding={"2rem"} margin={"2rem 0"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={"3.2rem"} variant="subtitle1">
                        ریاضیات
                    </Typography>
                    <Typography fontSize={"1.8rem"} variant="caption">
                        زمان باقیمانده: ۲۳:۴۵
                    </Typography>
                </Box>
                <Box borderRadius={"1rem"} padding={"2rem"} margin={"2rem 0 0 0"}>
                    <Typography>۱- سوال مربوط به آزمون</Typography>
                </Box>

                <Box margin={"3rem 0"} display={"flex"} gap={"1rem"} justifyContent={"center"}>
                    <ButtonKit variant="contained">
                        <Typography>سوال بعدی</Typography>
                    </ButtonKit>
                    <ButtonKit variant="outlined">
                        <Typography>سوال قبلی</Typography>
                    </ButtonKit>
                    <ButtonKit variant="outlined">
                        <Typography>اتمام آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ "& div": { flexBasis: "30%", padding: "2rem 0" } }}
                    gap={"2rem"}
                    margin={"2rem 0"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        bgcolor={theme?.palette?.grey[100]}
                        flexGrow={"1"}
                    >
                        <Typography variant="subtitle1">ارسال پاسخنامه (دانش آموز)</Typography>
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        bgcolor={theme?.palette?.grey[100]}
                        flexGrow={"1"}
                    >
                        <Typography variant="subtitle1">ثبت نمره (دانش آموز)</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SubjectiveTest;
