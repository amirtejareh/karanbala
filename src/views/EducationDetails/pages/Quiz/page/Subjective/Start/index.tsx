import React, { useEffect, useRef, useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import EducationDetailStore from "../../../../../../../stores/educationDetailStore";
import { ButtonKit } from "../../../../../../../components/kit/Button";
import { KaranbalaLogoTextSvg, QuizSvg } from "../../../../../../../assets";

import { toast } from "react-toastify";
import { userStore } from "../../../../../../../stores";

import useGetSubjectiveExamBasedOnCreateExam from "../../../../../../../hooks/subjective-exam/useGetSubjectiveExamBasedOnCreateExam";
import useCreateSubjectiveExamReport from "../../../../../../../hooks/subjective-exam-report/useCreateSubjectiveExamReport";

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
  const subjectivesId = segments[segments.length - 1];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [elapseMinuteTime, setElapseMinuteTime] = useState<number>();
  const [elapseSecondTime, setElapseSecondTime] = useState<number>();
  const [radioValue, setRadioValue] = React.useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const user: any = userStore((state) => state);
  const createsubjectivesExam = useCreateSubjectiveExamReport();

  const getSubjectiveExamBasedOnCreateExam = useGetSubjectiveExamBasedOnCreateExam(
    page === 0 ? 1 : page,
    limit,
    subjectivesId,
  );

  const [examElement, setExamElement] = useState<any>();

  useEffect(() => {
    getSubjectiveExamBasedOnCreateExam.refetch();
  }, []);

  useEffect(() => {
    if (getSubjectiveExamBasedOnCreateExam.data) {
      setExamElement(getSubjectiveExamBasedOnCreateExam.data);
    }
  }, [getSubjectiveExamBasedOnCreateExam.data]);

  useEffect(() => {
    getSubjectiveExamBasedOnCreateExam.refetch();
  }, [page]);

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
  const submitsubjectivesOnlineGradeReport = () => {
    if (selectedOptions.length === 0) {
      return toast.error("میبایست حداقل به یک سوال پاسخ دهید تا کارنامه برای شما صادر گردد");
    }

    setLoading(true);
    console.log(
      examElement?.subjectives[0]?.createExam[0]?.number,
      "examElement?.subjectives[0]?.createExam[0]?.number",
    );

    const data = {
      user: user.user,
      question: selectedOptions,
      examId: examElement?.subjectives[0]?.createExam[0]._id,
      examTitle:
        examElement?.subjectives[0]?.createExam[0]?.chapter?.length > 0
          ? examElement?.subjectives[0]?.createExam[0]?.chapter[0]?.title
          : examElement?.subjectives[0]?.createExam[0]?.term[0]?.title,
      type: examElement?.subjectives[0]?.isMultipleChoiceTest,
      book: examElement?.subjectives[0]?.createExam[0]?.books[0]?._id,
      gradeLevel: examElement?.subjectives[0]?.createExam[0]?.gradeLevel[0]?._id,
    };
    createsubjectivesExam.mutate(data, {
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

  console.log(examElement, "exam");

  const handleNextQuestion = (id) => {
    handleRadioChange(id, radioValue);

    const targetId = id;
    const defaultValue = "-";

    const optionIndex = selectedOptions?.findIndex((option) => option._id === targetId);

    if (optionIndex === -1) {
      setSelectedOptions([...selectedOptions, { _id: targetId, value: defaultValue }]);
    }
  };

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
                <Typography variant="h6">آزمون موضوعی</Typography>
              </Box>
              <Box>
                <Typography component="span">کتاب: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement?.subjectives[0]?.createExam[0]?.books[0]?.title}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">آزمون درسی: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement?.subjectives[0]?.createExam[0]?.chapter?.length > 0
                    ? examElement?.subjectives[0]?.createExam[0]?.chapter[0]?.title
                    : examElement?.subjectives[0]?.createExam[0]?.term[0]?.title}{" "}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">نوع آزمون: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement?.isMultipleChoiceTest ? "تستی" : "تشریحی"}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">شماره آزمون: </Typography>
                <Typography component="span" variant="h6">
                  {examElement &&
                    getSubjectiveExamBasedOnCreateExam?.data?.subjectives[0]?.createExam[0]?.number}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">تعداد سوالات:</Typography>
                <Typography component="span" variant="h6">
                  {getSubjectiveExamBasedOnCreateExam?.data?.totalItems}
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
              <Box component={"span"}>{`${examElement?.subjectives[0].number}-`} &nbsp;</Box>
              <Box
                component={"span"}
                dangerouslySetInnerHTML={{
                  __html: examElement?.subjectives[0].question,
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
                onClick={(e: any) =>
                  handleRadioChange(examElement?.subjectives[0]?._id, e?.target?.value)
                }
              >
                {examElement && (
                  <>
                    {examElement?.subjectives[0]?.options?.map((options) => {
                      return Object.values(options).map((option: any, index: any) => {
                        return (
                          <Box key={index}>
                            <FormControlLabel
                              value={index + 1}
                              control={
                                <Radio
                                  onClick={(e: any) =>
                                    handleRadioChange(
                                      examElement?.subjectives[0]?._id,
                                      e?.target?.value,
                                    )
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
          <Box display={"flex"} justifyContent={"center"} gap={"1rem"} flexWrap={"wrap"}>
            <ButtonKit
              onClick={() => {
                if (page == totalPage) {
                  handleNextQuestion(examElement._id);
                }
                if (page < totalPage) {
                  handleNextQuestion(examElement._id);
                  setPage(page + 1);
                }
              }}
              disabled={page == totalPage ? true : false}
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
              disabled={page == 1}
            >
              <Typography></Typography>سوال قبلی
            </ButtonKit>
            <ButtonKit
              onClick={() => {
                submitsubjectivesOnlineGradeReport();
              }}
              size="large"
              variant="outlined"
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
              window.location.href = `${window.location.protocol}//${process.env.REACT_APP_BASE_URL}/${examElement?.subjectives[0]?.createExam[0]?.AnswerSheetSourcePdfFile[0].link}`;
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
                `/education-details/quiz/subjective/${examElement?.subjectives[0]?.createExam[0]._id}/report`,
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
