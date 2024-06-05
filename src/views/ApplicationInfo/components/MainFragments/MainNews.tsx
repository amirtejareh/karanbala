import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { makeStyles } from "@mui/styles";
import useGetSomeNews from "../../../../hooks/news/useGetSomeNews";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { toPersianDate } from "../../../../utils/helper";
import { Navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  arrow: {
    border: `solid ${theme?.palette?.primary["main"]}`,
    borderWidth: " 0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
  },

  left: {
    transform: "rotate(135deg)",
  },
}));

const MainNews = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const getSomeNews = useGetSomeNews(5);
  const navigate = useNavigate();
  const getReadingPostTime = (text) => {
    var div = document.createElement("div");
    div.innerHTML = text;
    const wordCount = div.innerText.trim().split(/\s+/)?.length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  return (
    <Box>
      <Box margin={"5rem 3.25rem 2.5rem 2.5rem"} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography fontSize={"2rem"} variant="subtitle1">
            اخبار
          </Typography>
        </Box>
        <Box display={"flex"} onClick={() => navigate("/news")} sx={{ cursor: "pointer" }}>
          <Typography color={theme?.palette?.primary["main"]} fontSize={"2rem"} variant="subtitle1">
            بیشتر
          </Typography>
          <IconButton size={"small"} aria-label="left">
            <Box className={`${classes.arrow} ${classes.left}`} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          direction: "ltr",
          "& .images-wrap": {
            padding: "0 32px !important",
          },
        }}
      >
        {getSomeNews?.data && getSomeNews?.data?.news?.length > 0 && (
          <Slide slidesToScroll={2} slidesToShow={2}>
            {getSomeNews?.data?.news?.map((news) => {
              return (
                <Box
                  sx={{
                    direction: "ltr !important",
                    cursor: "pointer",
                  }}
                  width={"543px"}
                  display={"flex"}
                  onClick={() => navigate(`/news/${news._id}`)}
                >
                  <Box
                    bgcolor={theme?.palette?.secondary["50"]}
                    borderRadius={"2rem"}
                    height={"116px"}
                    width={"192px"}
                    component={"img"}
                    src={`${process.env.REACT_APP_BASE_URL}/${news?.image}`}
                  ></Box>

                  <Box
                    margin={"1.5rem 2rem"}
                    width={"245px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexDirection={"column"}
                  >
                    <Box textAlign={"left"}>
                      <Typography>{news?.title}</Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
                      <Box>
                        <Typography>
                          {toPersianDate({
                            value: news.createdAt.split("T")[0],
                            format: "YYYY/MM/DD",
                          })}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          {getReadingPostTime(news?.description)} دقیقه مطالعه
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slide>
        )}
      </Box>
    </Box>
  );
};

export { MainNews };
