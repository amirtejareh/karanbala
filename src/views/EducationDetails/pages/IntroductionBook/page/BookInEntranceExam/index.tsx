import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EducationDetailStore from "../../../../../../stores/educationDetailStore";
import useGetBookIntroBasedOnBooksAndType from "../../../../../../hooks/book-intro/useGetBookIntroBasedOnBooksAndType";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { CCarousel, CCarouselCaption, CCarouselItem } from "@coreui/react";
import { Player, BigPlayButton } from "video-react";
import { IconButtonKit } from "../../../../../../components/kit/IconButton";
import { ShowSvg } from "../../../../../../assets";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  attachments: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
    padding: "0.5rem",
  },
}));
const BookInEntranceExam = () => {
  const classes = useStyles();

  const { book } = EducationDetailStore();
  const [bookDetails, setBookDetails] = useState<any>();
  const getBookIntroBasedOnBooksAndType = useGetBookIntroBasedOnBooksAndType(
    [book],
    "bookInEntranceExam",
  );
  useEffect(() => {
    if (getBookIntroBasedOnBooksAndType.data && !getBookIntroBasedOnBooksAndType.isLoading) {
      setBookDetails(getBookIntroBasedOnBooksAndType.data);
    }
  }, [getBookIntroBasedOnBooksAndType.data]);

  return (
    <>
      <Box
        sx={{ "& .carousel-control-prev,.carousel-control-next": { height: "520px" } }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"50px 0 5px 0"}
      >
        <CCarousel controls indicators dark interval={false}>
          {bookDetails &&
            bookDetails.length > 0 &&
            bookDetails?.[0]?.videos?.map((video) => {
              return (
                <CCarouselItem>
                  <Player
                    controls
                    borderRadius={"5px"}
                    width={1000}
                    src={JSON.parse(video)?.link}
                    fluid={false}
                  >
                    <BigPlayButton position="center" />
                  </Player>
                  <CCarouselCaption className="d-none d-md-block">
                    {JSON.parse(video)?.title}
                  </CCarouselCaption>
                </CCarouselItem>
              );
            })}
        </CCarousel>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        {bookDetails &&
          bookDetails.length > 0 &&
          bookDetails?.[0]?.pdfFiles?.map((pdf) => {
            return (
              <Box className={classes.attachments}>
                <Box display={"flex"} padding={"0.5rem"}>
                  <IconButtonKit
                    onClick={() => {
                      window.location.href = `${process.env.REACT_APP_BASE_URL}/${pdf.link}`;
                    }}
                  >
                    <Box display={"flex"} gap={"1rem"}>
                      <ShowSvg />
                      <Typography variant="caption">{pdf.title}</Typography>
                    </Box>
                  </IconButtonKit>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
};

export default BookInEntranceExam;
