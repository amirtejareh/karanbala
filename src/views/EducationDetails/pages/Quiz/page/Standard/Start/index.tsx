import React, { useEffect, useRef, useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import EducationDetailStore from "../../../../../../../stores/educationDetailStore";
import { ButtonKit } from "../../../../../../../components/kit/Button";
import { KaranbalaLogoTextSvg, QuizSvg } from "../../../../../../../assets";
import useGetStandardExamBasedOnCreateExam from "../../../../../../../hooks/standard-exam/useGetStandardExamBasedOnBooks";
import { toast } from "react-toastify";
import { userStore } from "../../../../../../../stores";
import useCreateStandardGradeReport from "../../../../../../../hooks/standard-exam-report/useCreateStandardExamReport";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  QuizBox: {
    "& > button": {
      flexBasis: "15%",
    },
  },
  formField: {
    margin: "1rem",
    width: "100%",
  },
}));
const Start = () => {
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();
  const [quizValue, setQuizValue] = useState("");
  const [, setSeasonValue] = useState(1);
  const { book } = EducationDetailStore();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [limit, _] = useState<number>(1);
  const pathname = useLocation().pathname;
  const segments = pathname.split("/");
  const createExamId = segments[segments.length - 1];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [elapseMinuteTime, setElapseMinuteTime] = useState<number>();
  const [elapseSecondTime, setElapseSecondTime] = useState<number>();
  const [radioValue, setRadioValue] = React.useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const user: any = userStore((state) => state);
  const createStandardExam = useCreateStandardGradeReport();

  const getStandardExamBasedOnCreateExam = useGetStandardExamBasedOnCreateExam(
    page === 0 ? 1 : page,
    limit,
    createExamId,
  );

  const [examElement, setExamElement] = useState<any>();

  useEffect(() => {
    getStandardExamBasedOnCreateExam.refetch();
  }, []);

  useEffect(() => {
    getStandardExamBasedOnCreateExam.refetch();
  }, [page]);

  useEffect(() => {
    if (getStandardExamBasedOnCreateExam?.data) {
      setExamElement(getStandardExamBasedOnCreateExam?.data?.standards);

      if (elapseSecondTime == undefined && finishExam == false) {
        setElapseMinuteTime(
          Number(getStandardExamBasedOnCreateExam?.data?.standards[0]?.createExam[0]?.time) + 1,
        );
        setElapseSecondTime(
          (Number(getStandardExamBasedOnCreateExam?.data?.standards[0]?.createExam[0]?.time) + 1) *
            60,
        );
      }

      setTotalPage(getStandardExamBasedOnCreateExam?.data?.totalItems);
    }
  }, [getStandardExamBasedOnCreateExam?.data]);

  const handleRadioChange = (id, value) => {
    if (value === radioValue) {
      setRadioValue("-");
    } else {
      setRadioValue(value);
    }
    const optionValue = value;
    const optionIndex = selectedOptions?.findIndex((option) => option?._id === id);

    if (optionIndex !== -1) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[optionIndex].value = optionValue;
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, { id, value: optionValue }]);
    }
  };

  const submitStandardOnlineGradeReport = () => {
    if (selectedOptions.length === 0) {
      return toast.error("میبایست حداقل به یک سوال پاسخ دهید تا کارنامه برای شما صادر گردد");
    }
    setLoading(true);

    const data = {
      user: user.user,
      question: selectedOptions,
      examId: examElement[0]?.createExam[0]._id,
      examTitle:
        examElement[0]?.createExam[0]?.chapter?.length > 0
          ? examElement[0]?.createExam[0]?.chapter[0]?.title
          : examElement[0]?.createExam[0]?.term[0]?.title,
      examNumber: examElement[0]?.createExam[0]?.number,
      type: examElement[0]?.isMultipleChoiceTest,
      book: examElement[0]?.createExam[0]?.books[0]?._id,
      gradeLevel: examElement[0]?.createExam[0]?.gradeLevel[0]?._id,
    };
    createStandardExam.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        setLoading(false);
        toast(result.message);
      },
      onError: async (result: { message: string; statusCode: number; access_token: string }) => {
        setLoading(false);
        toast(result.message);
      },
    });
  };

  const handleNextQuestion = (id) => {
    handleRadioChange(id, radioValue);

    const targetId = id;
    const defaultValue = "-";

    const optionIndex = selectedOptions?.findIndex((option) => option._id === targetId);

    if (optionIndex === -1) {
      setSelectedOptions([...selectedOptions, { _id: targetId, value: defaultValue }]);
    }
  };

  const [finishExam, setFinishExam] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      if (elapseSecondTime > 60) {
        setElapseSecondTime(elapseSecondTime - 1);
      }
      if (elapseSecondTime < 61) {
        setFinishExam(true);
      }

      if (elapseSecondTime % 60 == 0 && elapseMinuteTime > 0) {
        setElapseMinuteTime(elapseMinuteTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [elapseSecondTime]);

  const classes = useStyles();

  return (
    <Box paddingBottom={"1rem"}>
      <Box
        margin={"0.75rem 0 0 0"}
        padding={"0.75rem 3.25rem 0.8rem 3.25rem"}
        display={"flex"}
        justifyContent={"flex-start"}
        borderBottom={"1px solid #B2BFCB"}
      >
        <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
          <KaranbalaLogoTextSvg />
        </ButtonKit>
      </Box>
      <Box margin={"4rem 5.2rem 0  5.2rem"}>
        <Box
          bgcolor={theme.palette.secondary["50"]}
          padding={"1.6rem"}
          justifyContent={"space-between"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          {examElement != undefined && (
            <>
              <Box>
                <Typography variant="h6">آزمون استاندارد</Typography>
              </Box>
              <Box>
                <Typography component="span">کتاب: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.createExam[0]?.books[0]?.title}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">آزمون درسی: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.createExam[0]?.chapter?.length > 0
                    ? examElement[0]?.createExam[0]?.chapter[0]?.title
                    : examElement[0]?.createExam[0]?.term[0]?.title}{" "}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">نوع آزمون: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.isMultipleChoiceTest ? "تستی" : "تشریحی"}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">شماره آزمون: </Typography>
                <Typography component="span" variant="h6">
                  {examElement &&
                    getStandardExamBasedOnCreateExam?.data?.standards[0]?.createExam[0]?.number}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">تعداد سوالات:</Typography>
                <Typography component="span" variant="h6">
                  {getStandardExamBasedOnCreateExam?.data?.totalItems}
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box
          padding={"4rem 0"}
          alignItems={"center"}
          marginLeft={"10px"}
          borderBottom={"1px solid #B2BFCB"}
        >
          {examElement && (
            <Box display={"flex"}>
              <Box component={"span"}>{`${examElement[0]?.number}-`} &nbsp;</Box>
              <Box
                component={"span"}
                dangerouslySetInnerHTML={{
                  __html: examElement[0]?.question,
                }}
              ></Box>
            </Box>
          )}
          <Box borderRadius={"1rem"}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={radioValue}
                name="radio-buttons-group"
                onClick={(e: any) => handleRadioChange(examElement[0]?._id, e?.target?.value)}
              >
                {examElement && (
                  <>
                    {examElement[0]?.options?.map((options) => {
                      return Object.values(options).map((option: any, index: any) => {
                        return (
                          <Box key={index}>
                            <FormControlLabel
                              value={index + 1}
                              control={
                                <Radio
                                  onClick={(e: any) =>
                                    handleRadioChange(examElement[0]?._id, e?.target?.value)
                                  }
                                />
                              }
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
                      });
                    })}
                  </>
                )}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>

        <Box padding={"4rem 0"}>
          <Typography component={"span"} variant="h6">
            زمان باقیمانده (دقیقه):{" "}
            <Typography variant="h6" component={"span"}>
              {elapseMinuteTime ===
              Number(getStandardExamBasedOnCreateExam?.data?.standards[0]?.createExam[0]?.time) + 1
                ? elapseMinuteTime - 1
                : elapseMinuteTime}
            </Typography>
          </Typography>
          <Box display={"flex"} justifyContent={"center"} gap={"1rem"} flexWrap={"wrap"}>
            <ButtonKit
              onClick={() => {
                if (page == totalPage) {
                  handleNextQuestion(examElement[0]._id);
                }
                if (page < totalPage) {
                  handleNextQuestion(examElement[0]._id);
                  setPage(page + 1);
                }
              }}
              disabled={page == totalPage || finishExam ? true : false}
              size="large"
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
              size="large"
              variant="outlined"
              disabled={page == 1 || finishExam}
            >
              <Typography></Typography>سوال قبلی
            </ButtonKit>
            <ButtonKit
              onClick={() => {
                // if (page == totalPage && finishExam) submitStandardOnlineGradeReport();
                submitStandardOnlineGradeReport();
              }}
              size="large"
              variant="outlined"
              // disabled={!finishExam}
            >
              <Typography>اتمام آزمون</Typography>{" "}
            </ButtonKit>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ "& div": { flexBasis: "50%", padding: "2rem 0" } }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 1rem 0 0"}
            onClick={() => {
              window.location.href = `${process.env.REACT_APP_BASE_URL}/${examElement[0]?.createExam[0]?.AnswerSheetSourcePdfFile[0].link}`;
            }}
          >
            <Typography variant="subtitle1">پاسخنامه</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 0 0 1rem"}
            onClick={() =>
              navigate(
                `/education-details/quiz/standard/${examElement[0]?.createExam[0]._id}/report`,
              )
            }
          >
            <Typography variant="subtitle1">کارنامه</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Start;
