import React, { useEffect, useRef, useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoTextSvg } from "../../../assets";
import useGetObjectiveTests from "../../../hooks/objective-test/useGetObjectiveTests";
import useGetObjectiveTest from "../../../hooks/objective-test/useGetObjectiveTest";
import jMoment from "jalali-moment";
import useGetObjectiveTestsBasedNumber from "../../../hooks/objective-test-management/useGetObjectiveTestsBasedNumber";
import useGetQuestionsBasedOnBook from "../../../hooks/question/useGetQuestionsBasedOnBook";

const ObjectiveTest = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    interface ObjectiveTestData {
        _id: string;
        number?: string;
        duration?: string;
        start?: string;
        end?: string;
        books: [{ _id: string }];
        type?: string;
        createdAt?: string;
        updatedAt?: string;
        isPublished: boolean;
    }
    let timer;
    const [currentActiveObjectiveTestId, setCurrentActiveObjectiveTestId] = useState("0");
    const [currentActiveObjectiveTestData, setCurrentActiveObjectiveTestData] =
        useState<ObjectiveTestData>();
    const [startObjectiveTest, setStartObjectiveTest] = useState(false);
    const [startObjectiveTestDate, setStartObjectiveTestDate] = useState<any>();
    const [countDown, setCountDown] = useState<number>();
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const getObjectiveTests = useGetObjectiveTests();
    const getObjectiveTest = useGetObjectiveTest(currentActiveObjectiveTestId);
    const [currentActiveBook, setCurrentActiveBook] = useState<ObjectiveTestData>();

    const getQuestionsBasedOnBook = useGetQuestionsBasedOnBook(
        page,
        limit,
        currentActiveBook?.books[0]?._id,
    );
    const getObjectiveTestBasedOnNumber = useGetObjectiveTestsBasedNumber(
        currentActiveObjectiveTestId,
    );

    useEffect(() => {
        if (!getQuestionsBasedOnBook?.isLoading && getQuestionsBasedOnBook?.data) {
            setTotalPage(getQuestionsBasedOnBook?.data?.totalPages);
        }
    }, [getQuestionsBasedOnBook?.data]);

    useEffect(() => {
        if (currentActiveObjectiveTestId !== "0") {
            getObjectiveTest.refetch();
        }
        if (currentActiveObjectiveTestId !== "0") {
            getObjectiveTestBasedOnNumber.refetch();
        }
    }, [currentActiveObjectiveTestId, getObjectiveTest?.data, getObjectiveTestBasedOnNumber?.data]);

    useEffect(() => {
        if (!getObjectiveTest.isLoading) {
            setCurrentActiveObjectiveTestData(getObjectiveTest.data);
        }
    }, [getObjectiveTest.data]);

    useEffect(() => {
        getObjectiveTests.refetch();
    }, []);

    useEffect(() => {
        jMoment.locale("fa");
        if (currentActiveObjectiveTestData?.start) {
            const dateTime = new Date(currentActiveObjectiveTestData?.start);
            const jDate = jMoment(dateTime).format("dddd jD MMMM jYYYY - ساعت: HH:mm:ss");
            setStartObjectiveTestDate(jDate);
        }
    }, [currentActiveObjectiveTestData]);

    useEffect(() => {
        if (!getObjectiveTests.isLoading) {
            if (getObjectiveTests.data.length > 0) {
                setCurrentActiveObjectiveTestData(getObjectiveTests.data[0]);
            }
        }
    }, [getObjectiveTests.data]);

    const calculateExamElapseTime = () => {
        if (currentActiveBook) {
            console.log(jMoment(new Date(currentActiveBook?.start)) > jMoment(new Date()));
            console.log(jMoment(new Date(currentActiveBook?.end)).diff(new Date(), "minutes") * 60);

            if (jMoment(new Date(currentActiveBook?.start)) > jMoment(new Date())) {
                return (
                    jMoment(new Date(currentActiveBook?.end)).diff(
                        new Date(currentActiveBook?.start),
                        "minutes",
                    ) * 60
                );
            } else {
                return jMoment(new Date(currentActiveBook?.end)).diff(new Date(), "minutes") * 60;
            }
        }

        return 0;
    };

    const [date, setDate] = useState(new Date());

    const handleObjectiveTestClick = (objectiveTestId: string) => {
        setStartObjectiveTest(false);
        setCurrentActiveObjectiveTestId(objectiveTestId);
    };

    const calculateExamDurationTime = () => {
        if (jMoment(new Date(currentActiveObjectiveTestData?.start)) > jMoment(new Date())) {
            return (
                jMoment(new Date(currentActiveObjectiveTestData?.end)).diff(
                    new Date(currentActiveObjectiveTestData?.start),
                    "minutes",
                ) + "دقیقه"
            );
        } else {
            return (
                jMoment(new Date(currentActiveObjectiveTestData?.end)).diff(new Date(), "minutes") +
                "دقیقه"
            );
        }
    };
    useEffect(() => {
        let timerId = null;

        if (startObjectiveTest) {
            if (currentActiveObjectiveTestData?.duration) {
                const durationInSeconds = parseInt(currentActiveObjectiveTestData?.duration) * 60;
                setCountDown(durationInSeconds);
            } else {
                const durationInSeconds = Number(calculateExamElapseTime());
                setCountDown(durationInSeconds);
            }

            timerId = setInterval(() => {
                setCountDown((prevCountDown) => {
                    const newCountDown = prevCountDown - 1;

                    if (newCountDown === 0) {
                        clearInterval(timerId);
                    }

                    return newCountDown;
                });
            }, 1000);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [startObjectiveTest]);

    useEffect(() => {
        let timerId = null;

        timerId = setInterval(() => {
            setDate(new Date());
        }, 5000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
        if (currentActiveBook) {
            if (!getQuestionsBasedOnBook.isLoading) {
                getQuestionsBasedOnBook.refetch();
            }
        }
    }, [currentActiveBook, getObjectiveTestBasedOnNumber?.data, page]);

    const checkIfTestStarts = (objectiveTest) => {
        console.log(
            jMoment(new Date(objectiveTest?.start)) < jMoment(new Date()) &&
                jMoment(new Date(objectiveTest?.end)) > jMoment(new Date()),
        );

        if (
            jMoment(new Date(objectiveTest?.start)) < jMoment(new Date()) &&
            jMoment(new Date(objectiveTest?.end)) > jMoment(new Date())
        ) {
            return false;
        }
        return true;
    };

    const checkStartObjectiveTest = (): boolean => {
        if (currentActiveObjectiveTestData?.duration) {
            if (parseInt(currentActiveObjectiveTestData?.duration) != 0) {
                if (!startObjectiveTest) {
                    return true;
                }
                return true;
            }
            return true;
        }

        if (
            Number(
                jMoment(new Date(currentActiveBook?.end)).diff(
                    new Date(currentActiveBook?.start),
                    "minutes",
                ),
            ) != 0
        ) {
            if (
                jMoment(new Date(currentActiveBook?.start)) < jMoment(new Date()) &&
                jMoment(new Date(currentActiveBook?.end)) > jMoment(new Date())
            ) {
                return false;
            }
            if (!startObjectiveTest) {
                return true;
            }

            return true;
        }

        return true;
    };

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleRadioChange = ({ _id }, event) => {
        const optionValue = event.target.value;
        const optionIndex = selectedOptions.findIndex((option) => option.id === _id);

        if (optionIndex !== -1) {
            const updatedOptions = [...selectedOptions];
            updatedOptions[optionIndex].value = optionValue;
            setSelectedOptions(updatedOptions);
        } else {
            setSelectedOptions([...selectedOptions, { _id, value: optionValue }]);
        }
    };

    const handleNextQuestion = ({ _id }) => {
        console.log(selectedOptions);

        const targetId = _id;
        const defaultValue = "-";

        const optionIndex = selectedOptions.findIndex((option) => option._id === targetId);

        if (optionIndex === -1) {
            setSelectedOptions([...selectedOptions, { _id: targetId, value: defaultValue }]);
        }
    };

    useEffect(() => {
        formatTime(calculateExamElapseTime());
    }, [date]);

    return (
        <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"fflex"} justifyContent={"end"}>
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
                        {!getObjectiveTests.isLoading ? (
                            <>
                                {getObjectiveTests.data && getObjectiveTests.data.length > 0 ? (
                                    getObjectiveTests.data.map(
                                        (objectiveTest: ObjectiveTestData, index) => {
                                            if (objectiveTest.isPublished)
                                                return (
                                                    <ButtonKit
                                                        key={index}
                                                        onClick={() => {
                                                            handleObjectiveTestClick(
                                                                objectiveTest._id,
                                                            );
                                                        }}
                                                        variant="contained"
                                                    >
                                                        <Typography>
                                                            {objectiveTest.number}
                                                        </Typography>
                                                    </ButtonKit>
                                                );
                                        },
                                    )
                                ) : (
                                    <Box>
                                        <Typography>در حال حاضر آزمون فعالی وجود ندارد</Typography>
                                    </Box>
                                )}
                            </>
                        ) : (
                            <Box>
                                <Typography>در حال بارگزاری آزمون</Typography>
                            </Box>
                        )}
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
                        آزمون شماره {currentActiveObjectiveTestData?.number}
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
                        {!getObjectiveTests.isLoading ? (
                            <>
                                {getObjectiveTests.data && getObjectiveTests.data.length > 0 ? (
                                    getObjectiveTests.data.map(
                                        (objectiveTest: ObjectiveTestData, index) => {
                                            if (objectiveTest.isPublished)
                                                return (
                                                    <ButtonKit
                                                        key={index}
                                                        onClick={() => {
                                                            handleObjectiveTestClick(
                                                                objectiveTest._id,
                                                            );
                                                        }}
                                                        variant="contained"
                                                    >
                                                        <Typography>
                                                            {objectiveTest.number}
                                                        </Typography>
                                                    </ButtonKit>
                                                );
                                        },
                                    )
                                ) : (
                                    <Box>
                                        <Typography>در حال حاضر آزمون فعالی وجود ندارد</Typography>
                                    </Box>
                                )}
                            </>
                        ) : (
                            <Box>
                                <Typography>در حال بارگزاری آزمون</Typography>
                            </Box>
                        )}
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
                    <Typography>
                        {currentActiveObjectiveTestData
                            ? currentActiveObjectiveTestData?.duration
                                ? currentActiveObjectiveTestData?.duration + " دقیقه"
                                : calculateExamDurationTime()
                            : ""}
                    </Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography>زمان فعال شدن آزمون: </Typography>
                    <Typography>{startObjectiveTestDate}</Typography>
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
                        width: "100%",
                    },
                }}
            >
                {getObjectiveTestBasedOnNumber?.data?.map((objectiveTest, index) => (
                    <ButtonKit
                        key={index}
                        sx={{
                            flexBasis: "22%",
                            borderRadius: "1rem",
                            padding: "2.7rem 10.9rem",
                            bgcolor: theme?.palette?.grey[100],
                            textAlign: "center",
                        }}
                        disabled={checkIfTestStarts(objectiveTest)}
                        onClick={() => {
                            setCurrentActiveBook(objectiveTest);
                            setPage(1);
                            setTotalPage(1);
                        }}
                    >
                        <Box>
                            {" "}
                            <Typography>{objectiveTest?.books[0]?.title}</Typography>
                            <Typography>سوالات (۱ تا ۲۰)</Typography>
                        </Box>
                    </ButtonKit>
                ))}
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
                        {getQuestionsBasedOnBook?.data &&
                            getQuestionsBasedOnBook?.data?.questions && (
                                <>{getQuestionsBasedOnBook?.data?.questions[0]?.books[0]?.title}</>
                            )}
                    </Typography>
                    <Typography fontSize={"1.8rem"} variant="caption">
                        زمان باقیمانده:{" "}
                        {startObjectiveTest
                            ? formatTime(countDown || 0)
                            : formatTime(calculateExamElapseTime())}
                    </Typography>
                </Box>

                <Box borderRadius={"1rem"} padding={"2rem"} margin={"2rem 0 0 0"}>
                    <Typography>
                        {getQuestionsBasedOnBook?.data &&
                            getQuestionsBasedOnBook?.data?.questions && (
                                <>
                                    <Box component={"span"}>
                                        {getQuestionsBasedOnBook?.data?.questions[0]?.number}-{" "}
                                    </Box>
                                    <Box
                                        component={"span"}
                                        sx={{ "& p": { display: "inline" } }}
                                        dangerouslySetInnerHTML={{
                                            __html: getQuestionsBasedOnBook?.data?.questions[0]
                                                .question,
                                        }}
                                    ></Box>
                                </>
                            )}
                    </Typography>
                </Box>
                <Box borderRadius={"1rem"} padding={"0 2rem 0 0"}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="جواب ۱"
                            name="radio-buttons-group"
                            onChange={(e) =>
                                handleRadioChange(getQuestionsBasedOnBook?.data?.questions[0], e)
                            }
                        >
                            {getQuestionsBasedOnBook?.data &&
                                getQuestionsBasedOnBook?.data?.questions && (
                                    <>
                                        {getQuestionsBasedOnBook?.data?.questions[0]?.options?.map(
                                            (options) => {
                                                return Object.values(options).map(
                                                    (option: any, index) => {
                                                        return (
                                                            <Box key={index}>
                                                                <FormControlLabel
                                                                    value={index}
                                                                    control={<Radio />}
                                                                    label={
                                                                        <Box
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: option,
                                                                            }}
                                                                        ></Box>
                                                                    }
                                                                />
                                                            </Box>
                                                        );
                                                    },
                                                );
                                            },
                                        )}
                                    </>
                                )}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box borderBottom={"1px solid grey"} padding={"0 0 2rem 0"}></Box>
                <Box margin={"3rem 0"} display={"flex"} gap={"1rem"} justifyContent={"center"}>
                    <ButtonKit
                        disabled={checkStartObjectiveTest()}
                        onClick={() => {
                            setStartObjectiveTest(true);
                        }}
                        variant="contained"
                    >
                        <Typography>شروع آزمون</Typography>
                    </ButtonKit>
                    <ButtonKit
                        onClick={() => {
                            if (page == totalPage) {
                                handleNextQuestion(getQuestionsBasedOnBook?.data?.questions[0]);
                            }
                            if (page < totalPage) {
                                handleNextQuestion(getQuestionsBasedOnBook?.data?.questions[0]);
                                setPage(page + 1);
                            }
                        }}
                        disabled={!startObjectiveTest}
                        variant="contained"
                    >
                        <Typography>سوال بعدی</Typography>
                    </ButtonKit>
                    <ButtonKit
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            }
                        }}
                        disabled={!startObjectiveTest}
                        variant="outlined"
                    >
                        <Typography>سوال قبلی</Typography>
                    </ButtonKit>
                    <ButtonKit
                        onClick={() => {
                            if (startObjectiveTest) {
                                setStartObjectiveTest(false);
                            }
                        }}
                        disabled={!startObjectiveTest}
                        variant="outlined"
                    >
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
                        <Typography>
                            {" "}
                            آزمون شماره {currentActiveObjectiveTestData?.number}
                        </Typography>
                    </Box>
                    <Box display={"flex"}>
                        <Typography>زمان فعال شدن آزمون: </Typography>
                        <Typography>{startObjectiveTestDate ?? ""}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ObjectiveTest;
