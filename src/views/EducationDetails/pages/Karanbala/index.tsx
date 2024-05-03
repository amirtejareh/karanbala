import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { Player, BigPlayButton } from "video-react";
import {
  ArrowDownSvg,
  ArrowUpSvg,
  KaranbalaExamSvg,
  KaranbalaLogoTextSvg,
  PointAndTestSvg,
  QuizSvg,
  ShowSvg,
  TextBookSvg,
} from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { IconButtonKit } from "../../../../components/kit/IconButton";
import { ModalKit } from "../../../../components/kit/Modal";
import EducationDetailStore from "../../../../stores/educationDetailStore";
import Num2persian from "num2persian";
import useGetKaranbalaBasedOnBooks from "../../../../hooks/karanbala/useGetKaranbalasBasedOnBooks";
import { CCarousel, CCarouselCaption, CCarouselItem } from "@coreui/react";
const useStyles = makeStyles((theme: ThemeOptions) => ({
  course: {
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
  chapterselected: {
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
    cursor: "pointer",
  },
  subjects: {
    display: "flex",
    flexBasis: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "1rem",
  },
  episodeBoxes: {
    display: "flex",
    flexBasis: "100%",
    backgroundColor: theme?.palette?.grey["A100"],
    border: `1px solid ${theme?.palette?.grey["200"]}`,
    borderRadius: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  episodeTitle: {
    display: "flex",
    padding: "1.5rem 2.5rem",
    borderRadius: "1rem",
    justifyContent: "space-between",
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
  attachments: { width: "100%", display: "flex", flexWrap: "wrap", gap: "10px", padding: "0.5rem" },
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
export const ModalQuiz = () => {
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} gap={"1rem"}>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.setItem("examType", "subjective");
            navigate("/education-details/quiz");
          }}
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
            <Typography variant="subtitle1">آزمون موضوعی</Typography>
          </Box>
        </Box>
        <Box
          onClick={() => {
            localStorage.setItem("examType", "standard");
            navigate("/pub/education-details/quiz");
          }}
          sx={{ cursor: "pointer" }}
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
            <Typography variant="subtitle1">آزمون استاندارد</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const Karanbala = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
  const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
  const [seasonVisible, setSeasonVisible] = useState<any>({});

  const [subjects, setsubjects] = useState<any>({});
  const [courses, setCourses] = useState<any>();
  const { book } = EducationDetailStore();

  const getEssayKaranbalaBasedOnBooks = useGetKaranbalaBasedOnBooks([book]);

  useEffect(() => {
    if (!getEssayKaranbalaBasedOnBooks.isLoading) {
      getEssayKaranbalaBasedOnBooks.refetch();
    }
  }, [getEssayKaranbalaBasedOnBooks.data]);

  useEffect(() => {
    const getItems = () => {
      const chapters = [];

      if (getEssayKaranbalaBasedOnBooks?.data) {
        getEssayKaranbalaBasedOnBooks?.data?.forEach((mapItem) => {
          const chapterTitle = mapItem.chapter[0].title;
          const existingChapter = chapters.find((chapter) => chapter.chapterTitle === chapterTitle);

          if (existingChapter) {
            mapItem.subject.forEach((subMap) => {
              const existingSection = existingChapter.sections.find(
                (section) => section.title === subMap.title,
              );

              if (existingSection) {
                existingSection.attachment.push(
                  ...subMap.attachment?.map((file) => ({
                    title: file.title,
                    address: file.address,
                  })),
                );
              } else {
                existingChapter.sections.push({
                  subjects: [
                    {
                      title: subMap.title,

                      karanbala: "#",
                      lessonPlan: "#",
                      pointAndTest: "#",
                      Karanbala: "#",
                      quiz: "#",
                      videos:
                        mapItem.videos?.map((video) => ({
                          link: JSON.parse(video).link ?? "#",
                          title: JSON.parse(video).title,
                        })) ?? "#",
                      pdfFiles:
                        mapItem.pdfFiles?.map((pdf) => ({
                          link: pdf?.link ?? "#",
                          title: pdf?.title,
                        })) ?? "#",
                    },
                  ],
                });
              }
            });
          } else {
            const sections = mapItem.subject?.map((subMap) => ({
              subjects: [
                {
                  title: subMap.title,

                  karanbala: "#",
                  lessonPlan: "#",
                  pointAndTest: "#",
                  Karanbala: "#",
                  quiz: "#",
                  videos:
                    mapItem.videos?.map((video) => ({
                      link: JSON.parse(video).link ?? "#",
                      title: JSON.parse(video).title,
                    })) ?? "#",
                  pdfFiles:
                    mapItem.pdfFiles?.map((pdf) => ({
                      link: pdf?.link ?? "#",
                      title: pdf?.title,
                    })) ?? "#",
                },
              ],
            }));
            chapters.push({
              chapterTitle,
              sections,
            });
          }
        });

        return [
          {
            courseTitle: getEssayKaranbalaBasedOnBooks?.data[0]?.book[0]?.title,
            chapters,
          },
        ];
      }
    };

    if (getEssayKaranbalaBasedOnBooks.data && !getEssayKaranbalaBasedOnBooks.isLoading) {
      setCourses(getItems());
    }
  }, [getEssayKaranbalaBasedOnBooks.data]);

  const chapters = courses?.filter((element) => element?.chapters != null)[0];

  useEffect(() => {
    const season = parseInt(
      Object.keys(seasonVisible)
        ?.map((element) => element.slice(7))
        .toString(),
    );
    if (season) {
      setsubjects(chapters?.chapters[season - 1]?.sections);
    }
  }, [seasonVisible]);

  useEffect(() => {
    setsubjects(chapters?.chapters[0]?.sections);
  }, [courses]);

  useEffect(() => {
    const myEpisodeArray = chapters?.chapters[0]?.sections?.map((element: any, index: any) => {
      return {
        id: "parent-episode-" + (index + 1),
        isSelected: false,
      };
    });

    setParentEpisodeVisible(
      myEpisodeArray?.reduce((acc: any, item: any) => {
        acc[item.id] = item.isSelected;
        return acc;
      }, {}),
    );

    const myLessonArray = chapters?.chapters[0]?.sections
      ?.map((element: any, index: any) => {
        return element.subjects?.map((el: any, ix: any) => {
          return {
            id: "children-episode-index-" + index + "-ix-" + ix,
            isSelected: false,
          };
        });
      })
      .flat();

    setChildrenEpisodeVisible(
      myLessonArray?.reduce((acc: any, item: any) => {
        acc[item.id] = item.isSelected;
        return acc;
      }, {}),
    );

    const mySeasonArray = chapters?.chapters?.map((value, index) => {
      return {
        id: "season-" + (index + 1),
        isSelected: false,
      };
    });
    setSeasonVisible(
      mySeasonArray?.reduce((acc: any, item: any) => {
        acc[item.id] = item.isSelected;
        return acc;
      }, {}),
    );
  }, [courses]);

  useEffect(() => {
    setSeasonVisible((prev: any) => {
      return {
        ["season-" + 1]: !seasonVisible["season-" + 1],
      };
    });
  }, [courses]);

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <ModalKit
        onClose={() => {
          setModalOpen(false);
        }}
        modalState={modalOpen}
        title={<>آزمون مورد نظر را انتخاب کنید</>}
        maxWidth={"xs"}
      >
        {({ handleApproved }: any) => <ModalQuiz />}
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
          کران بالا
        </Typography>
      </Box>
      <Box className={classes.course}>
        <Box>
          {chapters?.chapters?.map((value, index) => {
            return (
              <Box
                key={index}
                className={
                  seasonVisible["season-" + (index + 1)]
                    ? classes.chapterselected
                    : classes.chapters
                }
              >
                <Typography>
                  فصل {Num2persian(index + 1)}: {value.chapterTitle}
                </Typography>
                <Typography className={classes.arrowLeftParent}>
                  <IconButton
                    onClick={(e: any) => {
                      setSeasonVisible((prev: any) => {
                        return {
                          ["season-" + (index + 1)]: !seasonVisible["season-" + (index + 1)],
                        };
                      });
                    }}
                  >
                    {seasonVisible["season-" + (index + 1)] ? (
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
          {Object.values(subjects ?? [])?.length > 0 &&
            subjects?.map((value: any, index: any) => {
              return (
                <Box
                  onClick={(e: any) => {
                    setParentEpisodeVisible((prev: any) => {
                      return {
                        ...prev,
                        ["parent-episode-" + (index + 1)]:
                          !parentEpisodeVisible["parent-episode-" + (index + 1)],
                      };
                    });
                  }}
                  key={index}
                  className={classes.subjects}
                >
                  <Box className={classes.episodeBoxes}>
                    <Box className={classes.episodeTitle}>
                      <Typography>درس {Num2persian(index + 1)}</Typography>
                      <Typography>
                        <IconButton
                          onClick={(e: any) => {
                            setParentEpisodeVisible((prev: any) => {
                              return {
                                ...prev,
                                ["parent-episode-" + (index + 1)]:
                                  !parentEpisodeVisible["parent-episode-" + (index + 1)],
                              };
                            });
                          }}
                        >
                          {parentEpisodeVisible["parent-episode-" + (index + 1)] ? (
                            <ArrowUpSvg className={classes.arrowDown} />
                          ) : (
                            <ArrowDownSvg className={classes.arrowDown} />
                          )}
                        </IconButton>
                      </Typography>
                    </Box>
                    {parentEpisodeVisible["parent-episode-" + (index + 1)] && (
                      <>
                        {value?.subjects?.map((value: any, ix: any) => {
                          return (
                            <Box
                              onClick={(e) => e.stopPropagation()}
                              key={ix}
                              className={classes.episodeLessons}
                            >
                              <Box
                                className={classes.episodeLessonTitle}
                                onClick={(e: any) => {
                                  setChildrenEpisodeVisible((prev: any) => {
                                    return {
                                      ...prev,
                                      ["children-episode-index-" + index + "-ix-" + ix]:
                                        !childrenEpisodeVisible[
                                          "children-episode-index-" + index + "-ix-" + ix
                                        ],
                                    };
                                  });
                                }}
                              >
                                <Typography>{value?.title}</Typography>
                                <Typography>
                                  <IconButton
                                    onClick={(e: any) => {
                                      setChildrenEpisodeVisible((prev: any) => {
                                        return {
                                          ...prev,
                                          ["children-episode-index-" + index + "-ix-" + ix]:
                                            !childrenEpisodeVisible[
                                              "children-episode-index-" + index + "-ix-" + ix
                                            ],
                                        };
                                      });
                                    }}
                                  >
                                    {childrenEpisodeVisible[
                                      "children-episode-index-" + index + "-ix-" + ix
                                    ] ? (
                                      <ArrowUpSvg className={classes.arrowDown} />
                                    ) : (
                                      <ArrowDownSvg className={classes.arrowDown} />
                                    )}
                                  </IconButton>
                                </Typography>
                              </Box>
                              {childrenEpisodeVisible[
                                "children-episode-index-" + index + "-ix-" + ix
                              ] && (
                                <Box className={classes.content}>
                                  <Box className={classes.attachments}>
                                    {value.pdfFiles?.map((element: any, index: any) => (
                                      <Box key={index} display={"flex"} padding={"0.5rem"}>
                                        <IconButtonKit
                                          onClick={() => {
                                            window.location.href = `${window.location.protocol}//${process.env.REACT_APP_BASE_URL}/${element.link}`;
                                          }}
                                        >
                                          <Box display={"flex"} gap={"1rem"}>
                                            <ShowSvg />
                                            <Typography variant="caption">
                                              {element.title}
                                            </Typography>
                                          </Box>
                                        </IconButtonKit>
                                      </Box>
                                    ))}
                                  </Box>
                                  <Box
                                    sx={{
                                      "& .carousel-control-prev,.carousel-control-next": {
                                        height: "520px",
                                      },
                                    }}
                                    className={classes.video}
                                  >
                                    <CCarousel controls indicators dark interval={false}>
                                      {Array.isArray(value?.videos) &&
                                        value?.videos?.map((element: any, key: any) => {
                                          return (
                                            <CCarouselItem>
                                              <Player
                                                controls
                                                borderRadius={"5px"}
                                                width={1000}
                                                src={element.link}
                                                fluid={false}
                                              >
                                                <BigPlayButton position="center" />
                                              </Player>
                                              <CCarouselCaption className="d-none d-md-block">
                                                {element.title}
                                              </CCarouselCaption>
                                            </CCarouselItem>
                                          );
                                        })}
                                    </CCarousel>
                                  </Box>
                                  <Box display={"flex"} justifyContent={"space-around"}>
                                    {Array.of(1, 2, 3, 4, 5)?.map((element) => (
                                      <Box
                                        onClick={() => {
                                          if (element === 3) {
                                            setModalOpen(true);
                                          }
                                        }}
                                      >
                                        <IconButton className={classes.quickAccess}>
                                          <Box flexDirection={"column"}>
                                            <Box>
                                              {element == 1 ? (
                                                <TextBookSvg />
                                              ) : element == 2 ? (
                                                <KaranbalaExamSvg />
                                              ) : element == 3 ? (
                                                <QuizSvg />
                                              ) : element == 4 ? (
                                                <PointAndTestSvg />
                                              ) : element == 5 ? (
                                                <KaranbalaLogoTextSvg />
                                              ) : (
                                                ""
                                              )}
                                            </Box>

                                            <Typography variant="subtitle2">
                                              {element == 1 ? (
                                                <>درسنامه</>
                                              ) : element == 2 ? (
                                                <>کران بالا</>
                                              ) : element == 3 ? (
                                                <>آزمون انتخابی</>
                                              ) : element == 4 ? (
                                                <>نکته و تست</>
                                              ) : element == 5 ? (
                                                <>سوالات تشریحی</>
                                              ) : (
                                                ""
                                              )}
                                            </Typography>
                                          </Box>
                                        </IconButton>
                                      </Box>
                                    ))}
                                  </Box>
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </>
                    )}
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default Karanbala;
