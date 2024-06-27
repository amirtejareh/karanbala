import { Box, useTheme } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg, Logout2Svg, TelevisionSvg } from "../../assets";
import useGetNewsBasedOnId from "../../hooks/news/useGetNewsBasedOnId";
import { authStore, userStore } from "../../stores";

const News = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const user: any = userStore((state) => state);
  const { setAccessToken } = authStore((state) => state);
  const getOneNews = useGetNewsBasedOnId(id);
  const handleLogout = () => {
    setAccessToken("");
    user.setUser(null);
    localStorage.removeItem("auth-storage");
    navigate("/");
  };

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

      <Box padding={"12px 52px"}>
        <Box id="title">{getOneNews?.data?.title}</Box>
        <Box
          marginTop={"24px"}
          sx={{
            backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/${getOneNews?.data?.image}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
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
