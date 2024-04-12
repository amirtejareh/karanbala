import { Button } from "@mui/base";
import { Box, Typography } from "@mui/material";
import React from "react";
import { ButtonKit } from "../../../../../components/kit/Button";

const Profile = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
      <Box>
        <Typography marginBottom={"2.4rem"} variant="body1">
          پروفایل
        </Typography>
        <Typography marginBottom={"2.4rem"} variant="caption">
          مشخصات هویتی
        </Typography>
      </Box>
      <Box>
        <Typography marginBottom={"5.8rem"} variant="body1">
          بارگزاری تصویر پروفایل
        </Typography>
        <ButtonKit variant="outlined">
          <Typography variant="caption">تغییر رمز عبور</Typography>
        </ButtonKit>
      </Box>
    </Box>
  );
};

export default Profile;
