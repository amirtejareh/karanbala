import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import {
  KaranbalaExamSvg,
  KaranbalaLogoTextSvg,
  PointAndTestSvg,
  QuestionsSvg,
  QuizSvg,
  TextBookSvg,
} from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { SelectKit } from "../../../../components/kit/Select";
import { makeStyles } from "@mui/styles";
import EducationDetailStore from "../../../../stores/educationDetailStore";
import useGetChaptersBasedOnBooks from "../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetTermOfStudies from "../../../../hooks/term-of-study/useGetTermOfStudies";
import useGetCreateExamBasedOnStandardExamAndChapters from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndChapters";
import useGetCreateExamBasedOnStandardExamAndTerms from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndTerms";
import useGetCreateExamBasedOnStandardExamChaptersAndExamTypes from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamChaptersAndExamTypes";
import useGetCreateExamBasedOnStandardExamTermsAndExamTypes from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamTermsAndExamTypes";
import useGetCreateExamBasedOnSubjectiveExamAndSubjects from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExamAndSubjects";
import useGetSubjectsBasedOnSections from "../../../../hooks/subject/useGetSubjectsBasedOnSections";
import useGetSectionsBasedOnChapters from "../../../../hooks/section/useGetSectionsBasedOnChapters";
import useGetCreateExamBasedOnSubjectiveExamsBasedOnSubjectsAndExamLevel from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType";
import useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType from "../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType";

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
const Quiz = () => {
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();
  const [examValue, setExamValue] = useState(2);
  const [quizValue, setQuizValue] = useState("");
  const [examTypeValue, setExamTypeValue] = useState(2);
  const [, setSeasonValue] = useState(1);
  const [lessonValue, setLessonValue] = useState(1);
  const [episodeValue, setEpisodeValue] = useState(1);
  const { book } = EducationDetailStore();
  const [chapterIds, setChapterIds] = React.useState<any>([book]);
  const [sectionIds, setSectionIds] = useState<any>(chapterIds);
  const [termIds, setTermIds] = React.useState<any>(book);
  const [subjectIds, setSubjectIds] = useState<any>();
  const [examLevelId, setExamLevelId] = useState<any>();
  const selectSubjectRef = useRef<any>();
  const selectSectionRef = useRef<any>();
  const getTermOfStudies = useGetTermOfStudies();
  const selectChaptertRef = useRef<any>();
  const selectTermRef = useRef<any>();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [limit, _] = useState<number>(5);
  const [examElement, setExamElement] = useState<[]>();

  const [showItem, setShowItem] = useState<boolean | undefined>(undefined);
  const classes = useStyles();

  const getCreateExamBasedOnStandardExamChaptersAndExamTypes =
    useGetCreateExamBasedOnStandardExamChaptersAndExamTypes(
      page === 0 ? 1 : page,
      limit,
      chapterIds?.length == 0 ? null : chapterIds,
      quizValue,
    );

  const subjectsBasedOnSections = useGetSubjectsBasedOnSections(
    sectionIds?.length == 0 ? null : sectionIds,
  );

  useEffect(() => {
    if (sectionIds) subjectsBasedOnSections.refetch();
  }, [sectionIds]);

  const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
    chapterIds?.length == 0 ? null : chapterIds,
  );

  const getCreateExamBasedOnStandardExamTermsAndExamTypes =
    useGetCreateExamBasedOnStandardExamTermsAndExamTypes(
      page === 0 ? 1 : page,
      limit,
      termIds?.length == 0 ? null : termIds,
      quizValue,
    );

  useEffect(() => {
    if (quizValue != "") {
      if (termIds?.length > 0) {
        getCreateExamBasedOnStandardExamTermsAndExamTypes.refetch();
      } else if (chapterIds?.length > 0) {
        getCreateExamBasedOnStandardExamChaptersAndExamTypes.refetch();
      }
    }
  }, [quizValue, termIds, chapterIds]);

  const handleSubjectChange = (event: SelectChangeEvent) => {
    setSubjectIds(event.target.value as any);
  };

  const getCreateExamBasedOnStandardExamAndChapters =
    useGetCreateExamBasedOnStandardExamAndChapters(
      page === 0 ? 1 : page,
      limit,
      chapterIds?.length == 0 ? null : chapterIds,
    );

  const handleSectionChange = (event: SelectChangeEvent) => {
    setSectionIds(event.target.value as any);
    setSubjectIds([]);
  };

  const getCreateExamBasedOnStandardExamAndTerms = useGetCreateExamBasedOnStandardExamAndTerms(
    page === 0 ? 1 : page,
    limit,
    termIds?.length == 0 ? null : termIds,
  );

  const season = [
    { title: "فصل۱: تابع", value: 0 },
    { title: "فصل۲: مثلثات", value: 1 },
  ];

  const lesson = [
    { title: "درس اول", value: 0 },
    { title: "درس دوم", value: 1 },
  ];

  const episode = [
    { title: "تابع پیوسته", value: 0 },
    { title: "تابع گسسته", value: 1 },
  ];

  const text = ["کران بالا", "درس نامه", "سوالات تشریحی", "نکته و تست"];
  const logo = [<KaranbalaExamSvg />, <TextBookSvg />, <QuestionsSvg />, <PointAndTestSvg />];

  const path = ["karanbala", "lessons", "questions", "point-and-test"];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (showItem !== undefined) {
      localStorage.setItem("examType", showItem ? "subjective" : "standard");
    } else {
      if (localStorage.getItem("examType")) {
        setShowItem(localStorage.getItem("examType") === "subjective" ? true : false);
      } else {
        setShowItem(true);
      }
    }
  }, [showItem]);

  const handleChapterChange = (event: SelectChangeEvent) => {
    setChapterIds(event.target.value as any);
    setTermIds([]);
  };

  const handleTermChange = (event: SelectChangeEvent) => {
    setTermIds(event.target.value as any);
    setChapterIds([]);
  };

  useEffect(() => {
    if (termIds && termIds?.length > 0) {
      getCreateExamBasedOnStandardExamAndTerms.refetch();
    }
  }, [termIds]);

  useEffect(() => {
    if (
      !getCreateExamBasedOnStandardExamAndChapters.isLoading &&
      getCreateExamBasedOnStandardExamAndChapters?.data?.createExams
    ) {
      setPage(parseInt(getCreateExamBasedOnStandardExamAndChapters?.data?.currentPage ?? 1));
      setPageSize(getCreateExamBasedOnStandardExamAndChapters?.data?.totalPages ?? 1);
    }
  }, [getCreateExamBasedOnStandardExamAndChapters?.data]);

  useEffect(() => {
    if (book && book != "") getTermOfStudies.refetch();
  }, [book]);

  useEffect(() => {
    if (chapterIds && chapterIds?.length > 0) {
      getSectionsBasedOnChapters.refetch();

      getCreateExamBasedOnStandardExamAndChapters.refetch();
    }
  }, [chapterIds]);

  useEffect(() => {}, [getCreateExamBasedOnStandardExamAndChapters?.data?.createExams]);

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(book == "" ? null : [book]);
  useEffect(() => {
    if (book) getChaptersBasedOnBooks.refetch();
  }, [book]);

  useEffect(() => {
    if (getCreateExamBasedOnStandardExamAndTerms?.data && termIds != "") {
      setExamElement(getCreateExamBasedOnStandardExamAndTerms?.data?.createExams);
    } else if (getCreateExamBasedOnStandardExamAndChapters?.data && chapterIds != "") {
      setExamElement(getCreateExamBasedOnStandardExamAndChapters?.data?.createExams);
    } else {
      setExamElement([]);
    }
  }, [
    getCreateExamBasedOnStandardExamAndTerms?.data,
    getCreateExamBasedOnStandardExamTermsAndExamTypes?.data,
    termIds,
    chapterIds,
  ]);

  useEffect(() => {
    if (getCreateExamBasedOnStandardExamChaptersAndExamTypes?.data && chapterIds != "") {
      setExamElement(getCreateExamBasedOnStandardExamChaptersAndExamTypes?.data?.createExams);
    } else if (getCreateExamBasedOnStandardExamTermsAndExamTypes?.data && termIds != "") {
      setExamElement(getCreateExamBasedOnStandardExamTermsAndExamTypes?.data?.createExams);
    } else {
      setExamElement([]);
    }
  }, [
    getCreateExamBasedOnStandardExamChaptersAndExamTypes?.data,
    getCreateExamBasedOnStandardExamTermsAndExamTypes?.data,
    termIds,
    chapterIds,
  ]);

  const getCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType =
    useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType(
      page === 0 ? 1 : page,
      limit,
      subjectIds?.length == 0 ? null : subjectIds,
      examLevelId,
      quizValue,
    );

  useEffect(() => {
    if (sectionIds && chapterIds && subjectIds && quizValue && examLevelId) {
      getCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType.refetch();
    }
  }, [sectionIds, chapterIds, subjectIds, quizValue, examLevelId]);

  const [disabledExam, setDisabledExam] = useState<boolean>(true);

  useEffect(() => {
    if (getCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType?.data?.createExams) {
      setDisabledExam(false);
    } else {
      setDisabledExam(true);
    }
  }, [getCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType.data]);

  useEffect(() => {
    if (subjectIds && subjectIds?.length > 0) {
      getCreateExamBasedOnStandardExamAndChapters.refetch();
    }
  }, [subjectIds]);

  const generateCustomRadioGroup = (choices: {}, defaultValue?: string) => {
    return (
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={localStorage.getItem("examType") ?? Object.keys(choices)[0]}
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
                onChange={(element: any) => {
                  setShowItem(element.target.defaultValue === "subjective" ? true : false);
                }}
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
    <Box paddingBottom={"1rem"}>
      <Box
        margin={"0.75rem 3.25rem 0 3.25rem"}
        display={"flex"}
        justifyContent={"flex-end"}
        gap={"0.8rem"}
      >
        <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
          <KaranbalaLogoTextSvg />
        </ButtonKit>
      </Box>
      <Box margin={"4rem 5.2rem 0  5.2rem"}>
        <Typography variant="subtitle1">آزمون مورد نظر را انتخاب کنید </Typography>
      </Box>
      <Box margin={"3.5rem 5.2rem 8rem  5.2rem"}>
        <Box display={"flex"}>
          {generateCustomRadioGroup({
            subjective: "آزمون موضوعی",
            standard: "آزمون استاندارد",
          })}
        </Box>
        {!showItem ? (
          <>
            <Box gap={"3rem"} display={"flex"} flexWrap={"wrap"}>
              <Box width={"25%"} sx={{ "& > label": { margin: "1rem 0" } }}>
                <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
                <Select
                  fullWidth
                  onChange={handleChapterChange}
                  value={chapterIds ?? []}
                  inputRef={selectChaptertRef}
                >
                  {!getChaptersBasedOnBooks?.isLoading &&
                    getChaptersBasedOnBooks?.data != undefined &&
                    getChaptersBasedOnBooks?.data?.map((element) => {
                      return (
                        <MenuItem key={element._id} value={element._id}>
                          {element.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </Box>
              <Box flexBasis={"25%"} sx={{ "& > label": { margin: "1rem 0" } }}>
                <InputLabel id="demo-simple-select-label">
                  انتخاب (ترم یک، ترم دو، کل کتاب)
                </InputLabel>
                <Select
                  fullWidth
                  value={termIds ?? []}
                  inputRef={selectTermRef}
                  onChange={handleTermChange}
                >
                  {!getTermOfStudies?.isLoading &&
                    getTermOfStudies?.data != undefined &&
                    getTermOfStudies?.data?.map((element) => {
                      return (
                        <MenuItem key={element._id} value={element._id}>
                          {element.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </Box>
              <Box flexBasis={"25%"} sx={{ "& > label": { margin: "1rem 0" } }}>
                <InputLabel id="demo-simple-select-label">
                  نوع و سطح آزمون را انتخاب کنید
                </InputLabel>
                <Select
                  fullWidth
                  value={quizValue}
                  label={"نوع و سطح آزمون را انتخاب کنید"}
                  onChange={({ target: { value } }) => {
                    setQuizValue(value);
                  }}
                >
                  <MenuItem value={"multipleChoiceTest"}>تستی</MenuItem>
                  <MenuItem value={"essayTest"}>تشریحی</MenuItem>
                </Select>
              </Box>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
              {examElement?.map((element: any, index: number) => {
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
                        <Typography variant="subtitle1">{`آزمون ${element.number}`}</Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box display={"flex"} justifyContent={"center"} margin={"5rem 0"}>
              <ButtonKit variant="contained">
                <Typography>مشاهده آزمون</Typography>
              </ButtonKit>
            </Box>
          </>
        ) : (
          <>
            <Box borderBottom={"1px solid grey"} marginBottom={"5rem"} marginTop={"2rem"}></Box>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              borderBottom={"1px solid grey"}
              paddingBottom={"5rem"}
              marginTop={"2rem"}
              gap={"1rem"}
              sx={{
                "&  label": { margin: "1rem 0", height: "23px" },
                "& > div": { flexBasis: "40%" },
              }}
            >
              <Box>
                <FormControl className={classes.formField} fullWidth>
                  <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
                  <Select
                    onChange={handleChapterChange}
                    value={chapterIds ?? []}
                    inputRef={selectChaptertRef}
                  >
                    {!getChaptersBasedOnBooks?.isLoading &&
                      getChaptersBasedOnBooks?.data != undefined &&
                      getChaptersBasedOnBooks?.data?.map((element) => {
                        return (
                          <MenuItem key={element._id} value={element._id}>
                            {element.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl className={classes.formField} fullWidth>
                  <InputLabel id="demo-simple-select-label">انتخاب بخش</InputLabel>
                  <Select
                    required
                    value={sectionIds ?? []}
                    inputRef={selectSectionRef}
                    onChange={handleSectionChange}
                  >
                    {!getSectionsBasedOnChapters?.isLoading &&
                      getSectionsBasedOnChapters?.data != undefined &&
                      getSectionsBasedOnChapters?.data?.map((element) => {
                        return (
                          <MenuItem key={element._id} value={element._id}>
                            {element.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl className={classes.formField} fullWidth>
                  <InputLabel id="demo-simple-select-label">انتخاب موضوع</InputLabel>
                  <Select
                    required
                    value={subjectIds ?? []}
                    inputRef={selectSubjectRef}
                    onChange={handleSubjectChange}
                  >
                    {!subjectsBasedOnSections?.isLoading &&
                      subjectsBasedOnSections?.data != undefined &&
                      subjectsBasedOnSections?.data?.map((element) => {
                        return (
                          <MenuItem key={element._id} value={element._id}>
                            {element.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"end"}
              gap={"5rem"}
              marginBottom={"5rem"}
              marginTop={"2rem"}
            >
              <Box
                sx={{
                  "& > label": { margin: "1rem 0" },
                }}
                flexBasis={"30%"}
              >
                <InputLabel id="demo-simple-select-label">
                  نوع و سطح آزمون را انتخاب کنید
                </InputLabel>
                <Select
                  fullWidth
                  value={quizValue}
                  label={"نوع و سطح آزمون را انتخاب کنید"}
                  onChange={({ target: { value } }) => {
                    setQuizValue(value);
                  }}
                >
                  <MenuItem value={"multipleChoiceTest"}>تستی</MenuItem>
                  <MenuItem value={"essayTest"}>تشریحی</MenuItem>
                </Select>
              </Box>
              <Box>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={examLevelId}
                    onChange={(e) => setExamLevelId(e.target.value)}
                  >
                    <FormControlLabel value="challenging" control={<Radio />} label="چالشی" />
                    <FormControlLabel value="hard" control={<Radio />} label="سخت" />
                    <FormControlLabel value="normal" control={<Radio />} label="متوسط" />
                    <FormControlLabel value="easy" control={<Radio />} label="آسان" />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"center"} margin={"5rem 0"}>
                <ButtonKit disabled={disabledExam} variant="contained">
                  <Typography>مشاهده آزمون</Typography>
                </ButtonKit>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={"5rem"}
              justifyContent={"center"}
              margin={"7.5rem auto"}
              className={`${classes.QuizBox}`}
            >
              {text.map((value: string, index: number) => {
                return (
                  <ButtonKit key={index} onClick={() => navigate(path[index])}>
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default Quiz;
