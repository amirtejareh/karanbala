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
  const [radioValue, setRadioValue] = React.useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const user: any = userStore((state) => state);

  const getSubjectiveExamBasedOnCreateExam = useGetSubjectiveExamBasedOnCreateExam(
    page === 0 ? 1 : page,
    limit,
    createExamId,
  );

  const [examElement, setExamElement] = useState<any>();

  useEffect(() => {
    getSubjectiveExamBasedOnCreateExam.refetch();
  }, []);

  useEffect(() => {
    getSubjectiveExamBasedOnCreateExam.refetch();
  }, [page]);

  useEffect(() => {
    if (getSubjectiveExamBasedOnCreateExam?.data) {
      setExamElement(getSubjectiveExamBasedOnCreateExam?.data?.subjectives);
    }

    setTotalPage(getSubjectiveExamBasedOnCreateExam?.data?.totalItems);
  }, [getSubjectiveExamBasedOnCreateExam?.data]);

  const handleRadioChange = (id, value) => {
    if (value === radioValue) {
      setRadioValue("-");
    } else {
      setRadioValue(value);
    }
    const optionValue = value;
    const optionIndex = selectedOptions.findIndex((option) => option._id === id);

    if (optionIndex !== -1) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[optionIndex].value = optionValue;
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, { id, value: optionValue }]);
    }
  };

  const submitsubjectiveOnlineGradeReport = () => {
    if (selectedOptions.length === 0) {
      return toast.error("میبایست حداقل به یک سوال پاسخ دهید تا کارنامه برای شما صادر گردد");
    }
    setLoading(true);
    const data = {
      user,
      question: selectedOptions,
      examId: examElement[0]?.createExam[0]._id,
      examTitle:
        examElement[0]?.createExam[0]?.chapter?.length > 0
          ? examElement[0]?.createExam[0]?.chapter[0]?.title
          : examElement[0]?.createExam[0]?.term[0]?.title,
      examNumber: examElement[0]?.createExam[0].number,
      type: examElement[0]?.isMultipleChoiceTest,
      book: examElement[0]?.createExam[0]?.books[0]?.title,
    };
  };

  const handleNextQuestion = (id) => {
    handleRadioChange(id, radioValue);

    const targetId = id;
    const defaultValue = "-";

    const optionIndex = selectedOptions.findIndex((option) => option._id === targetId);

    if (optionIndex === -1) {
      setSelectedOptions([...selectedOptions, { _id: targetId, value: defaultValue }]);
    }
  };

  const [finishExam, setFinishExam] = useState(false);

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
                  {examElement && examElement[0]?.createExam[0]?.books[0]?.title}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">درس: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.createExam[0]?.chapter?.length > 0
                    ? examElement[0]?.createExam[0]?.chapter[0]?.title
                    : examElement[0]?.createExam[0]?.term[0]?.title}{" "}
                </Typography>
              </Box>

              <Box>
                <Typography component="span">شماره درس: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.createExam[0]?.section[0]?.title}
                </Typography>
              </Box>
              <Box>
                <Typography component="span">نوع آزمون: </Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.isMultipleChoiceTest ? "تستی" : "تشریحی"}
                </Typography>
              </Box>

              <Box>
                <Typography component="span">سطح سوال:</Typography>
                <Typography component="span" variant="h6">
                  {examElement && examElement[0]?.createExam[0]?.examLevel === "easy"
                    ? "آسان"
                    : examElement[0]?.createExam[0]?.examLevel === "hard"
                      ? "سخت"
                      : examElement[0]?.createExam[0]?.examLevel === "average"
                        ? "متوسط"
                        : examElement[0]?.createExam[0]?.examLevel === "challenging"
                          ? "چالشی"
                          : ""}
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box borderBottom={"1px solid #B2BFCB"} padding={"4rem 0"}>
          {examElement && (
            <Box>
              <Box component={"span"}>سوال: {`${examElement[0]?.number}- `}</Box>
              <Box
                component={"span"}
                sx={{ "& p": { display: "inline-block" } }}
                padding={"4rem 0"}
                dangerouslySetInnerHTML={{
                  __html: examElement[0]?.question,
                }}
              ></Box>
            </Box>
          )}
          <Box borderRadius={"1rem"} padding={"0 2rem 0 0"}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={radioValue}
                name="radio-buttons-group"
                onClick={(e: any) => handleRadioChange(examElement[0].question, e.target.value)}
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
                                    handleRadioChange(examElement[0].question, e.target.value)
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
                  handleNextQuestion(examElement[0]._id);
                }
                if (page < totalPage) {
                  handleNextQuestion(examElement[0]._id);
                  setPage(page + 1);
                }
              }}
              disabled={finishExam ? true : false}
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
              disabled={finishExam ? true : false}
            >
              <Typography></Typography>سوال قبلی
            </ButtonKit>
            <ButtonKit
              onClick={() => {
                submitsubjectiveOnlineGradeReport();
              }}
              size="large"
              variant="outlined"
            >
              <Typography></Typography>اتمام آزمون
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
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 1rem 0 0"}
          >
            <Typography variant="subtitle1">پاسخنامه</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 0 0 1rem"}
          >
            <Typography variant="subtitle1">کارنامه</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Start;
