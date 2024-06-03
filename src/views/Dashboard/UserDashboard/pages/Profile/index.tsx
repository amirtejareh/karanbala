import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { ButtonKit } from "../../../../../components/kit/Button";
import { CalendarDarkSvg, EditDarkSvg } from "../../../../../assets";
import UserImage from "../../../../../assets/images/user.jpg";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const useStyles = makeStyles((theme: Theme) => ({
  formField: {
    margin: "1rem 0",
    flexBasis: "180px",
  },
}));
const Profile = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const classes = useStyles();

  const [gender, setGender] = useState<string>("male");
  const [firstName, setFirstName] = useState<string>();
  const [familyName, setFamilyName] = useState<string>("male");
  const [nationalCode, setNationalCode] = useState<string>();
  const [fathersName, setFathersName] = useState<string>();
  const [birthdate, setBirthdate] = useState(new Date());
  const [parentsPhone, setParentsPhone] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  return (
    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
      <Box>
        <Typography marginBottom={"2.4rem"} variant="body1">
          پروفایل
        </Typography>
        <Typography marginBottom={"2.4rem"} variant="caption">
          مشخصات هویتی
        </Typography>

        <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
          <FormControl sx={{ flexBasis: "180px" }} className={`${classes.formField}`}>
            <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
            <Select
              size="small"
              {...register("gender", {
                required: "لطفا نوع جنسیت مشخص کنید",
              })}
              value={gender}
              onChange={(e: any) => setGender(e?.target?.value)}
            >
              <MenuItem value={"male"}>مرد</MenuItem>

              <MenuItem value={"female"}>زن</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <TextField
              fullWidth
              {...register("familyName")}
              onChange={(e: any) => setFamilyName(e.target.value)}
              className={classes.formField}
              variant="outlined"
              label="نام خانوادگی"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box>
            <TextField
              {...register("firstName")}
              onChange={(e: any) => setFirstName(e.target.value)}
              className={classes.formField}
              variant="outlined"
              label="نام "
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>
        <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
          <Box flexBasis={"180px"} display={"flex"} alignItems={"center"}>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <DatePicker
                slots={{ openPickerIcon: CalendarDarkSvg }}
                label="روز تولد"
                defaultValue={new Date(2022, 1, 1)}
                value={birthdate}
                onChange={(value) => setBirthdate(value)}
              />
            </LocalizationProvider>
          </Box>

          <Box>
            <TextField
              {...register("nationalCode")}
              onChange={(e: any) => setNationalCode(e.target.value)}
              value={nationalCode}
              className={classes.formField}
              variant="outlined"
              label="کدملی"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box>
            <TextField
              {...register("fathersName")}
              onChange={(e: any) => setFathersName(e.target.value)}
              className={classes.formField}
              value={fathersName}
              variant="outlined"
              label="نام پدر "
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>

        <Typography marginBottom={"2.4rem"} variant="caption">
          راه ارتباطی
        </Typography>

        <Box display={"flex"} gap={"1rem"}>
          <Box display={"flex"} alignItems={"center"}>
            <TextField
              {...register("phone")}
              onChange={(e: any) => setPhone(e.target.value)}
              value={nationalCode}
              className={classes.formField}
              variant="outlined"
              label="کدملی"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <TextField
              {...register("parentsPhone")}
              onChange={(e: any) => setParentsPhone(e.target.value)}
              value={nationalCode}
              className={classes.formField}
              variant="outlined"
              label="شماره تلفن همراه والدین"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <TextField
              {...register("email")}
              onChange={(e: any) => setEmail(e.target.value)}
              className={classes.formField}
              value={fathersName}
              variant="outlined"
              label="ایمیل"
              type="text"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>
        <Box display={"flex"} gap={"1rem"}>
          <Box sx={{ flexBasis: "180px" }}></Box>
          <Box display={"flex"} justifyContent={"flex-end"} sx={{ flexBasis: "180px" }}></Box>
          <Box display={"flex"} gap={"10px"} sx={{ flexBasis: "180px" }}>
            <ButtonKit size="small" variant="outlined">
              تایید
            </ButtonKit>{" "}
            <ButtonKit size="small" variant="outlined">
              انصراف
            </ButtonKit>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography marginBottom={"5.8rem"} variant="body2">
          بارگزاری تصویر پروفایل
        </Typography>

        <Box display={"flex"} flexDirection={"column"} position={"relative"} borderRadius={"100%"}>
          <Box
            component={"img"}
            src={UserImage}
            alt={"user image"}
            width={136}
            height={136}
            onClick={() => {}}
            marginBottom={"2rem"}
          />
          <IconButton
            sx={{
              backgroundColor: "#FCF0FF",
              width: 28,
              height: 28,
              borderRadius: "8px",
              p: 0.5,
              position: "absolute",
              top: "100px",
            }}
          >
            <EditDarkSvg onClick={() => {}} />
            <input type="file" ref={(e) => {}} hidden onChange={(e) => {}} />
          </IconButton>
          <Box display={"flex"} justifyContent={"center"}>
            {" "}
            <ButtonKit sx={{ width: "115px" }} size="large" variant="outlined">
              <Typography variant="caption">تغییر رمز عبور</Typography>
            </ButtonKit>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
