import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg } from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { ModalKit } from "../../../../components/kit/Modal";
import Num2persian from "num2persian";
import EducationDetailStore from "../../../../stores/educationDetailStore";
import useGetComprehensiveTestBasedOnBooks from "../../../../hooks/comprehensive-test/useComprehensiveTestBasedOnbooks";
import { userStore } from "../../../../stores";
import useGetPrimaryQuestionBasedOnComprehensiveTest from "../../../../hooks/comprehensive-test/primary-question/useGetPrimaryQuestionBasedOnComprehensiveTest";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  courses: {
    display: "flex",
    gap: "5rem",
    height: "7rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chapters: {
    width: "27.125rem",
    display: "flex",
    backgroundColor: theme?.palette?.primary["main"],
    color: theme?.palette?.common.white,
    height: "6.1rem",
    borderRadius: "1.5rem",
    padding: "1.5rem 2.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem",
    flexWrap: "wrap",
  },
  chapterSelected: {
    width: "27.125rem",
    display: "flex",
    height: "6.1rem",
    backgroundColor: theme?.palette?.secondary["main"],
    borderRadius: "1.5rem",
    color: theme?.palette?.common.black,
    padding: "1.5rem 2.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem",
    flexWrap: "wrap",
  },
  episodeParent: {
    flexBasis: "50%",
  },
  pointer: {
    cursor: "pointer",
  },
  episodes: {
    display: "flex",
    flexBasis: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "1rem",
  },
  episodeBoxes: {
    flexBasis: "100%",
    backgroundColor: theme?.palette?.grey["A100"],
    border: `1px solid ${theme?.palette?.grey["200"]}`,
    borderRadius: "1rem",
    padding: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  episodeTitle: {
    display: "flex",
    padding: "1.5rem 2.5rem",
    borderRadius: "1rem",
    flexBasis: "100%",
    flexWrap: "wrap",
  },
  episodeLessons: {
    display: "flex",
    borderRadius: "1rem",
    justifyContent: "space-between",
    flexBasis: "100%",
    padding: "1.5rem 2.5rem 1.5rem 2.5rem",
    flexWrap: "wrap",
  },
  episodeLessonTitle: {
    display: "flex",
    padding: "1.5rem 2.5rem",
    borderRadius: "1rem",
    justifyContent: "space-between",
    flexBasis: "100%",
    backgroundColor: theme?.palette?.grey["50"],
    border: `1px solid ${theme?.palette?.grey["200"]}`,
    flexWrap: "wrap",
  },
  content: { width: "100%" },
  attachment: { width: "100%", display: "flex" },
  video: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "1rem",
  },
  quickAccess: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "1rem",
    "& > div": {
      backgroundColor: theme?.palette?.others.warning.light,
      width: "15rem",
      height: "14rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1rem",
    },
    "& svg": {
      width: "50px",
    },
    "& div > svg": {
      backgroundColor: "#fff",
      padding: "5px",
      borderRadius: "1rem",
    },
  },
  arrowDown: {
    width: "1.5rem",
    height: "1.5rem",
    color: "#fff",
  },
  arrowLeft: {
    color: "#fff",
    width: "2.5rem",
    height: "2.5rem",
  },
  arrowUp: {
    width: "1.5rem",
    height: "1.5rem",
  },
  arrow: {
    border: "solid black",
    borderWidth: "0 0.1rem 0.1rem 0",
    display: "inline-block",
    padding: "0.4rem",
  },
  arrowLeftParent: {
    width: "41px",
    height: "41px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  down: {
    transform: "rotate(45deg)",
  },
}));

const ModalExam = () => {
  const theme: ThemeOptions = useTheme();

  return (
    <Box>
      <Box>
        <Typography>سوال مشابه ۱</Typography>
        <Box display={"flex"} justifyContent={"center"}>
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
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        borderBottom={"1px solid grey"}
        paddingBottom={"25px"}
        marginBottom={"3rem"}
      >
        <Box>
          <Typography>پاسخنامه</Typography>
        </Box>
        <Box>
          <Typography>
            <ArrowLeftIcon />
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography>سوال مشابه ۲</Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="جواب ۲"
              name="radio-buttons-group"
            >
              <FormControlLabel value="جواب ۱" control={<Radio />} label="جواب ۱" />
              <FormControlLabel value="جواب ۲" control={<Radio />} label="جواب ۲" />
              <FormControlLabel value="جواب ۳" control={<Radio />} label="جواب ۳" />
              <FormControlLabel value="جواب ۴" control={<Radio />} label="جواب ۴" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography>پاسخنامه</Typography>
        </Box>
        <Box>
          <Typography>
            <ArrowLeftIcon />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Exam = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const { book } = EducationDetailStore((state) => state);
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [chapterVisible, setChapterVisible] = useState<any>({});
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getComprehensiveTestBasedOnBooks = useGetComprehensiveTestBasedOnBooks([book]);
  const [courses, setCourses] = useState<any>();
  const [radioValue, setRadioValue] = React.useState<any>("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [comprehensiveTestId, setComprehensiveTestId] = useState();
  const getPrimaryQuestionsBasedOnComprehensiveTestId =
    useGetPrimaryQuestionBasedOnComprehensiveTest(
      page === 0 ? 1 : page,
      limit,
      comprehensiveTestId,
    );
  console.log(getPrimaryQuestionsBasedOnComprehensiveTestId);

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

  useEffect(() => {
    if (comprehensiveTestId) {
      getPrimaryQuestionsBasedOnComprehensiveTestId.refetch();
    }
  }, [comprehensiveTestId]);

  useEffect(() => {
    if (getComprehensiveTestBasedOnBooks?.data) {
      let all_chapters = getComprehensiveTestBasedOnBooks?.data
        ?.map((dataDetails) => {
          return { title: dataDetails.chapter[0].title, _id: dataDetails._id };
        })
        .map((chapterTitle) => {
          return { chapterTitle: chapterTitle.title, _id: chapterTitle._id };
        });

      setCourses([
        {
          courseTitle: getComprehensiveTestBasedOnBooks?.data[0]?.book[0]?.title,
          chapters: all_chapters,
        },
      ]);

      setComprehensiveTestId(getComprehensiveTestBasedOnBooks?.data[0]?._id);
    }
  }, [getComprehensiveTestBasedOnBooks?.data]);

  const chapters = courses?.filter((element) => element.chapters != null)[0];

  useEffect(() => {
    const chapter = parseInt(
      Object.keys(chapterVisible)
        .map((element) => element.slice(7))
        .toString(),
    );
  }, [chapterVisible]);

  useEffect(() => {
    setChapterVisible((prev: any) => {
      return {
        ["chapter-" + 1]: !chapterVisible["chapter-" + 1],
      };
    });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {" "}
      <ModalKit
        onClose={() => {
          setModalOpen(false);
        }}
        modalState={modalOpen}
        title={<>سوال مشابه</>}
        maxWidth={"sm"}
      >
        {({ handleApproved }: any) => <ModalExam />}
      </ModalKit>
      <Box
        margin={"0.75rem 3.25rem 0 3.25rem"}
        paddingBottom={"7.5rem"}
        display={"flex"}
        justifyContent={"flex-end"}
        gap={"0.8rem"}
      >
        <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
          {" "}
          <KaranbalaLogoTextSvg />
        </ButtonKit>
      </Box>
      <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
        <Typography fontSize={"3.6rem"} variant="subtitle1">
          تست های جامع
        </Typography>
      </Box>
      <Box className={classes.courses}>
        <Box>
          {chapters?.chapters?.map((value, index) => {
            if (index === 0) {
              if (comprehensiveTestId == undefined) {
                console.log(comprehensiveTestId);
              }
            }
            return (
              <Box
                key={index}
                className={`${classes.pointer}
                  ${
                    chapterVisible["chapter-" + (index + 1)]
                      ? classes.chapterSelected
                      : classes.chapters
                  }
                  
                `}
                onClick={(e: any) => {
                  setComprehensiveTestId(value?._id);

                  setChapterVisible((prev: any) => {
                    return {
                      ["chapter-" + (index + 1)]: !chapterVisible["chapter-" + (index + 1)],
                    };
                  });
                }}
              >
                <Typography>
                  فصل {Num2persian(index + 1)}: {value.chapterTitle}
                </Typography>
                <Typography className={classes.arrowLeftParent}>
                  <IconButton>
                    {chapterVisible["chapter-" + (index + 1)] ? (
                      <Box className={` ${classes.arrow} ${classes.down}`} />
                    ) : (
                      <ArrowLeftIcon className={classes.arrowLeft} />
                    )}
                  </IconButton>
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box className={classes.episodeParent}>
          <Box className={classes.episodes}>
            <Box className={classes.episodeBoxes}>
              <Box
                width={"100%"}
                bgcolor={theme?.palette?.grey["100"]}
                padding={"2rem"}
                borderRadius={"1rem"}
              >
                <Box display={"flex"} justifyContent={"space-around"} width={"100%"}>
                  <Typography>
                    تعداد سوالات اصلی:{" "}
                    {getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.totalItems}
                  </Typography>
                  <Typography>
                    تعداد سوالات مشابه:{" "}
                    {getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.totalSimilarQuestions}
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box component={"span"}>
                  {`${getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.primaryTests?.[0]?.questionNumber}-`}{" "}
                  &nbsp;
                </Box>
                <Box
                  component={"span"}
                  dangerouslySetInnerHTML={{
                    __html:
                      getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.primaryTests?.[0]
                        ?.question,
                  }}
                ></Box>
              </Box>
              <Box>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={radioValue}
                    name="radio-buttons-group"
                    onClick={(e: any) =>
                      handleRadioChange(
                        getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.primaryTests?.[0]?._id,
                        e?.target?.value,
                      )
                    }
                  >
                    {getPrimaryQuestionsBasedOnComprehensiveTestId && (
                      <>
                        {getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.primaryTests?.[0]?.options?.map(
                          (options) => {
                            return Object.values(options).map((option: any, index: any) => {
                              return (
                                <Box key={index}>
                                  <FormControlLabel
                                    value={index + 1}
                                    control={
                                      <Radio
                                        onClick={(e: any) =>
                                          handleRadioChange(
                                            getPrimaryQuestionsBasedOnComprehensiveTestId?.[0]?._id,
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
                          },
                        )}
                      </>
                    )}
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <Accordion sx={{ boxShadow: "none !important" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      justifyContent: "flex-start !important",
                      "& > div": {
                        flexGrow: "0 !important",
                      },
                    }}
                  >
                    راهنما
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      component={"span"}
                      dangerouslySetInnerHTML={{
                        __html:
                          getPrimaryQuestionsBasedOnComprehensiveTestId?.data?.primaryTests?.[0]
                            ?.guideLine,
                      }}
                    ></Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box display={"flex"} justifyContent={"center"} gap={"1rem"} flexWrap={"wrap"}>
                <ButtonKit size="large" variant="contained">
                  <Typography></Typography>سوال بعدی
                </ButtonKit>
                <ButtonKit
                  onClick={() => {
                    setModalOpen(!modalOpen);
                  }}
                  size="large"
                  variant="contained"
                >
                  <Typography></Typography>سوال مشابه
                </ButtonKit>
                <ButtonKit size="large" variant="contained">
                  <Typography></Typography>سوال قبلی
                </ButtonKit>
              </Box>
              <Box margin={"1rem 0 0 0"} display={"flex"} justifyContent={"space-around"}>
                <ButtonKit size="large" variant="outlined">
                  <Typography></Typography>
                  اتمام دور فعلی
                </ButtonKit>
                <ButtonKit size="large" variant="outlined">
                  <Typography></Typography>
                  شروع دور جدید
                </ButtonKit>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Exam;
