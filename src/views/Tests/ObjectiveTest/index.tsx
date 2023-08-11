import React, { useEffect } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoTextSvg } from "../../../assets";

const ObjectiveTest = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"end"}>
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
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
                gap={"1rem"}
                margin={"2rem 0 0 0"}
                display={"flex"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                sx={{
                    "& >div p": {
                        width: "300px",
                    },
                    "& > div": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            >
                <Box
                    flexBasis={"22%"}
                    borderRadius={"1rem"}
                    padding={"2.7rem 10.9rem"}
                    bgcolor={theme?.palette?.grey[100]}
                    textAlign={"center"}
                >
                    <Typography>ریاضیات</Typography>
                    <Typography>سوالات (۱ تا ۲۰)</Typography>
                </Box>
                <Box
                    borderRadius={"1rem"}
                    padding={"2.7rem 10.9rem"}
                    bgcolor={theme?.palette?.grey[100]}
                    textAlign={"center"}
                    flexBasis={"22%"}
                >
                    <Typography>زیست شناسی</Typography>
                    <Typography>سوالات (۲۱ تا ۴۰)</Typography>
                </Box>
                <Box
                    borderRadius={"1rem"}
                    padding={"2.7rem 10.9rem"}
                    bgcolor={theme?.palette?.grey[100]}
                    textAlign={"center"}
                    flexBasis={"22%"}
                >
                    <Typography>زیست شناسی</Typography>
                    <Typography>سوالات (۲۱ تا ۴۰)</Typography>
                </Box>
                <Box
                    borderRadius={"1rem"}
                    padding={"2.7rem 10.9rem"}
                    bgcolor={theme?.palette?.grey[100]}
                    textAlign={"center"}
                    flexBasis={"22%"}
                >
                    <Typography>زیست شناسی</Typography>
                    <Typography>سوالات (۲۱ تا ۴۰)</Typography>
                </Box>
            </Box>
            <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
                gap={"1rem"}
                sx={{
                    "& div > button": {
                        width: "15rem",
                        height: "10.2rem",
                        marginTop: "3rem",
                    },
                }}
            >
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">بودجه بندی آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">پاسخنامه آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">بودجه بندی آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">پاسخنامه آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">بودجه بندی آزمون</Typography>
                    </ButtonKit>
                </Box>
                <Box>
                    <ButtonKit variant="contained">
                        <Typography variant="subtitle1">پاسخنامه آزمون</Typography>
                    </ButtonKit>
                </Box>
            </Box>
            <ButtonKit sx={{ width: "100%" }} onClick={() => navigate("report")}>
                <Box
                    bgcolor={theme?.palette?.grey[100]}
                    display={"flex"}
                    justifyContent={"center"}
                    borderRadius={"1rem"}
                    padding={"2rem"}
                    margin={"2rem 0"}
                    width={"100%"}
                >
                    <Box>
                        <Typography variant="subtitle1">کارنامه-تحلیل-نمودارهای پیشرفت</Typography>
                    </Box>
                </Box>
            </ButtonKit>
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
                <Box borderRadius={"1rem"} padding={"0 2rem 0 0"}>
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
                <Box borderBottom={"1px solid grey"} padding={"0 0 2rem 0"}></Box>
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
                    bgcolor={theme?.palette?.grey[100]}
                    display={"flex"}
                    justifyContent={"space-between"}
                    borderRadius={"1rem"}
                    padding={"2rem"}
                >
                    <Box display={"flex"}>
                        <Typography>آزمون: </Typography>
                        <Typography>آزمون شماره ۸</Typography>
                    </Box>
                    <Box display={"flex"}>
                        <Typography>
                            زمان فعال شدن آزمون: چهارشنبه ۲۱ تیرماه ۱۴۰۲ - ساعت ۱۴:۴۵
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ObjectiveTest;
