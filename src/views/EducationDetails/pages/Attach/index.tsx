import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import {
  ArrowDownSvg,
  ArrowLeftSvg,
  ArrowRightSvg,
  KaranbalaLogoTextSvg,
  ShowSvg,
  TextBookSvg,
} from "../../../../assets";
import { Player, BigPlayButton } from "video-react";

import { makeStyles } from "@mui/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { IconButtonKit } from "../../../../components/kit/IconButton";
import { ModalKit } from "../../../../components/kit/Modal";
import { ModalQuiz } from "../Karanbala";
import EducationDetailStore from "../../../../stores/educationDetailStore";
import Num2persian from "num2persian";
import useGetAttachBasedOnBooks from "../../../../hooks/attach/useGetAttachBasedOnBooks";
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
  episodeAttach: {
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
  attachments: { width: "100%", display: "flex" },
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

const Attach = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const [parentEpisodeVisible, setParentEpisodeVisible] = useState<any>({});
  const [childrenEpisodeVisible, setChildrenEpisodeVisible] = useState<any>({});
  const [seasonVisible, setSeasonVisible] = useState<any>({});
  const [subjects, setsubjects] = useState<any>({});
  const [courses, setCourses] = useState<any>();
  const { book } = EducationDetailStore();

  const getAttachBasedOnBooks = useGetAttachBasedOnBooks([book]);

  useEffect(() => {
    if (!getAttachBasedOnBooks.isLoading) {
      getAttachBasedOnBooks.refetch();
    }
  }, [getAttachBasedOnBooks.data]);

  useEffect(() => {
    if (getAttachBasedOnBooks.data && !getAttachBasedOnBooks.isLoading) {
      setCourses(getAttachBasedOnBooks.data);
    }
  }, [getAttachBasedOnBooks.data]);

  const chapters = courses?.filter((element) => element?.chapter != null);

  const uniqueChapters = [];
  chapters?.forEach((chapter) => {
    const isDuplicate = uniqueChapters.some(
      (uniqueChapter) => uniqueChapter.title === chapter.chapter[0].title,
    );
    if (!isDuplicate) {
      uniqueChapters.push({
        title: chapter.chapter[0].title,
        attachments: [
          {
            type: chapter.type,
            pdfFiles: chapter.pdfFiles,
            videos: chapter.videos,
          },
        ],
      });
    } else {
      uniqueChapters
        .find((element) => element.title == chapter.chapter[0].title)
        .attachments.push({
          type: chapter.type,
          pdfFiles: chapter.pdfFiles,
          videos: chapter.videos,
        });
    }
  });

  const [chapterDetails, setChapterDetails] = useState<any>();

  useEffect(() => {
    if (uniqueChapters.length > 0) {
      setChapterDetails(uniqueChapters[0]);
    }
  }, [getAttachBasedOnBooks.data]);

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const seasonRef = useRef<any>();

  useEffect(() => {
    seasonRef?.current?.click();
  }, [seasonRef?.current]);

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
          ضمائم
        </Typography>
      </Box>
      <Box className={classes.course}>
        <Box>
          {uniqueChapters?.map((element, index) => {
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
                  فصل {Num2persian(index + 1)}: {element.title}
                </Typography>
                <Typography className={classes.arrowLeftParent}>
                  <IconButton
                    ref={index == 0 ? seasonRef : null}
                    onClick={(e: any) => {
                      setChapterDetails(element);

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
          {chapterDetails?.attachments?.map((element, index) => {
            return (
              <Box onClick={(e: any) => {}} className={classes.subjects}>
                <Box className={classes.episodeBoxes}>
                  <>
                    <Box onClick={(e) => e.stopPropagation()} className={classes.episodeAttach}>
                      <Box
                        className={classes.episodeTitle}
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
                        <Typography>
                          {element?.type === "summary"
                            ? "خلاصه فصل"
                            : element?.type === "attaches"
                              ? "پیوست"
                              : "جداول"}
                        </Typography>
                        <Typography>
                          <IconButton onClick={(e: any) => {}}>
                            <ArrowDownSvg className={classes.arrowDown} />
                          </IconButton>
                        </Typography>
                      </Box>

                      {parentEpisodeVisible["parent-episode-" + (index + 1)] && (
                        <Box className={classes.content}>
                          <Box className={classes.attachments}>
                            {element.pdfFiles?.map((element: any, index: any) => (
                              <Box key={index} display={"flex"} padding={"0.5rem"}>
                                <IconButtonKit onClick={() => navigate(element.address)}>
                                  <Box display={"flex"} gap={"1rem"}>
                                    <ShowSvg />
                                    <Typography variant="caption">{element.title}</Typography>
                                  </Box>
                                </IconButtonKit>
                              </Box>
                            ))}
                          </Box>
                          <Box className={classes.video}>
                            <CCarousel controls indicators dark interval={false}>
                              {Array.isArray(element?.videos) &&
                                element?.videos?.map((video: any, key: any) => {
                                  return (
                                    <CCarouselItem>
                                      <Player
                                        controls
                                        borderRadius={"5px"}
                                        width={1000}
                                        src={video.link}
                                        fluid={false}
                                      >
                                        <BigPlayButton position="center" />
                                      </Player>
                                      <CCarouselCaption className="d-none d-md-block">
                                        {video.title}
                                      </CCarouselCaption>
                                    </CCarouselItem>
                                  );
                                })}
                            </CCarousel>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Attach;
