import { Box, useTheme } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonKit } from "../../components/kit/Button";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg, Logout2Svg, TelevisionSvg } from "../../assets";
import useGetNewsBasedOnId from "../../hooks/news/useGetNewsBasedOnId";

const News = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const getOneNews = useGetNewsBasedOnId(id);

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
          <KaranbalaLogoSvg />
          <KaranbalaLogoTextSvg />
        </Box>
        <Box display={"flex"} gap={"10px"}>
          <Box
            sx={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: `${theme.palette.grey["50"]} !important`,
            }}
          >
            <TelevisionSvg />
          </Box>
          <Box
            sx={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: `${theme.palette.grey["50"]} !important`,
            }}
          >
            <Logout2Svg />
          </Box>
        </Box>
      </Box>

      <Box padding={"12px 52px"}>
        <Box id="title">{getOneNews?.data?.title}</Box>
        <Box
          marginTop={"24px"}
          sx={{
            backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/${getOneNews?.data?.image}')`,
          }}
          id="image"
          height={"368px"}
          bgcolor={"#DAE4ED"}
          borderRadius={"2rem"}
        ></Box>

        <Box
          marginTop={"24px"}
          id={"description"}
          dangerouslySetInnerHTML={{
            __html: getOneNews?.data?.description,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default News;
