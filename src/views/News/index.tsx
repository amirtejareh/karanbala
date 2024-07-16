import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

import { KaranbalaLogoSvg, KaranbalaLogoTextSvg, Logout2Svg, TelevisionSvg } from "../../assets";
import { useNavigate } from "react-router-dom";
import useGetNews from "../../hooks/news/useGetNews";
import useGetSomeNews from "../../hooks/news/useGetSomeNews";
import { toPersianDate } from "../../utils/helper";
import { authStore, userStore } from "../../stores";

const News = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  const [limit, _] = useState<number>(20);

  const user: any = userStore((state) => state);
  const { setAccessToken } = authStore((state) => state);

  const getReadingPostTime = (text) => {
    var div = document.createElement("div");
    div.innerHTML = text;
    const wordCount = div.innerText.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  const handleLogout = () => {
    setAccessToken("");
    user.setUser(null);
    localStorage.removeItem("auth-storage");
    localStorage.removeItem("user-storage");
    navigate("/");
  };

  const getSomeSectionOfDescription = (text) => {
    var div = document.createElement("div");
    div.innerHTML = text;

    if (div.innerText.slice(0, 50) === "undefined") {
      return "";
    } else {
      return div.innerText.slice(0, 250) + "[...]";
    }
  };

  const getSomeNews = useGetSomeNews(6);
  const getNews = useGetNews(page, limit);

  useEffect(() => {
    if (page > 0) {
      getNews.refetch();
    }
  }, [page]);

  useEffect(() => {
    if (getNews?.data) {
      setPageSize(getNews?.data?.totalPages);
    }
  }, [getNews?.data]);

  return (
    <Box>
      <Box
        padding={"12px 52px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px solid #B2BFCB"}
      >
        <Box display={"flex"} gap={"1rem"}>
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <KaranbalaLogoSvg />
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <KaranbalaLogoTextSvg />
          </Box>
        </Box>
        {user?.user && (
          <Box display={"flex"} gap={"10px"}>
            <Box
              sx={{
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: `${theme.palette.grey["50"]} !important`,
                cursor: "pointer",
              }}
            >
              <TelevisionSvg />
            </Box>

            <Box
              sx={{
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: `${theme.palette.grey["50"]} !important`,
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              <Logout2Svg />
            </Box>
          </Box>
        )}
      </Box>

      {getSomeNews?.data?.news?.[0]?.isPublished === true && (
        <Box display={"flex"} padding={"12px 52px"} gap={"10px"}>
          <Box flexBasis={"769px"}>
            <Box
              sx={{
                backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/${getNews?.data?.allNews?.[0]?.image}')`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              display={"flex"}
              flexBasis={"769px"}
              height={"368px"}
              borderRadius={"1rem"}
            ></Box>
            <Box id="title" fontSize={"24px"} marginTop={"24px"}>
              {getSomeNews?.data?.news?.[0]?.title}
            </Box>
            <Box marginTop={"24px"} id={"description"}>
              {getSomeSectionOfDescription(getSomeNews?.data?.news?.[0]?.description)}
            </Box>
            <Box marginTop={"24px"} id="read_more">
              <Button
                onClick={() => navigate(`/news/${getSomeNews?.data?.news?.[0]?._id}`)}
                variant="contained"
              >
                بیشتر
              </Button>
            </Box>
          </Box>
          <Box flexBasis={"543px"} display={"flex"} flexDirection={"column"} gap={"10px"}>
            {getSomeNews?.data?.news
              ?.filter((item: any) => {
                return item?._id !== getSomeNews?.data?.news?.[0]?._id && item.isPublished === true;
              })
              ?.map((news) => {
                return (
                  <Box
                    sx={{
                      direction: "ltr !important",
                      cursor: "pointer",
                      display: "flex",
                    }}
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
          </Box>
        </Box>
      )}

      <Box padding={"12px 52px"} gap={"10px"}>
        <Typography fontWeight={"bold"} fontSize={"32px"} lineHeight={"40px"}>
          خبرهای تازه
        </Typography>
        <Box marginTop={"24px"}>
          <Box flexBasis={"543px"} display={"flex"} flexDirection={"column"} gap={"40px"}>
            {getNews?.data?.allNews

              ?.filter((element) => element.isPublished === true)

              ?.map((news) => {
                return (
                  <Box
                    sx={{
                      direction: "ltr !important",
                      cursor: "pointer",
                      display: "flex",
                    }}
                    onClick={() => navigate(`/news/${news._id}`)}
                  >
                    <Box
                      margin={"1.5rem 2rem"}
                      flexBasis={"792px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      flexDirection={"column"}
                    >
                      <Box>
                        <Box textAlign={"left"}>
                          <Typography fontSize={"24px"}>{news?.title}</Typography>
                        </Box>
                        <Box lineHeight={"24px"} marginTop={"24px"}>
                          {getSomeSectionOfDescription(news?.description)}
                        </Box>
                      </Box>

                      <Box display={"flex"} gap={"73px"} flexWrap={"wrap"}>
                        <Box>
                          <Typography color={"#32074F"}>
                            {getReadingPostTime(news?.description)} دقیقه مطالعه
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color={"#32074F"}>
                            {toPersianDate({
                              value: news.createdAt.split("T")[0],
                              format: "YYYY/MM/DD",
                            })}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      bgcolor={theme?.palette?.secondary["50"]}
                      borderRadius={"2rem"}
                      height={"172px"}
                      width={"384px"}
                      component={"img"}
                      src={`${process.env.REACT_APP_BASE_URL}/${news?.image}`}
                    ></Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Box>

      <Box
        flexWrap={"wrap"}
        gap={"2px"}
        display={"flex"}
        id="pagination"
        textAlign={"center"}
        padding={"50px"}
      >
        {Array(pageSize)
          .fill(0)
          .map((e, i) => i + 1)
          .map((element) => (
            <Box
              width={"50px"}
              height={"50px"}
              borderRadius={"10px"}
              padding={"5px"}
              sx={{ cursor: "pointer" }}
              bgcolor={"blue"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"#fff"}
              onClick={() => setPage(element)}
            >
              {element}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default News;
