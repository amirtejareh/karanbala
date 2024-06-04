import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ButtonKit } from "../../../../../components/kit/Button";
import { CalendarDarkSvg, EditDarkSvg } from "../../../../../assets";
import UserImage from "../../../../../assets/images/user.jpg";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useGetProvinces from "../../../../../hooks/province/useGetProvinces";
import useGetCitiesBasedOnProvinceId from "../../../../../hooks/city/useGetCitiesBasedOnProvinceId";
import useGetFieldOfStudies from "../../../../../hooks/field-of-study/useGetFieldOfStudies";
import useGetGradeLevels from "../../../../../hooks/grade-level/useGetGradeLevels";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) => ({
  formField: {
    margin: "1rem 0",
    flexBasis: "336px",
    height: "56px",
  },
}));
const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const classes = useStyles();
  const [birthdate, setBirthdate] = useState(new Date());
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [gradeLevelOptions, setGradeLevelOptions] = useState([]);
  const [fieldOfStudyOptions, setfieldOfStudyOptions] = useState([]);
  const [provinceId, setProvinceId] = useState<string>("0");
  const getProvinces = useGetProvinces();
  const getCitiesBasedOnProvinceId = useGetCitiesBasedOnProvinceId(provinceId);
  const getFiledOfStudies = useGetFieldOfStudies();
  const getGradeLevels = useGetGradeLevels();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const profilePhotoRef = useRef<any>();

  const onSelectFile = (e: any) => {
    if (!profilePhotoRef.current.files || profilePhotoRef.current.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(profilePhotoRef.current.files[0]);
  };

  const updateSubmit = (data) => {
    console.log(data, "data");
  };

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      console.log(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (getFiledOfStudies?.data) {
      setfieldOfStudyOptions(
        getFiledOfStudies?.data?.map((fieldOfStudy) => {
          return {
            label: fieldOfStudy.title,
            value: fieldOfStudy._id,
          };
        }) ?? [],
      );
    }
  }, [getFiledOfStudies?.data]);

  useEffect(() => {
    if (getGradeLevels?.data) {
      setGradeLevelOptions(
        getGradeLevels?.data?.map((gradeLevel) => {
          return {
            label: gradeLevel.title,
            value: gradeLevel._id,
          };
        }) ?? [],
      );
    }
  }, [getGradeLevels?.data]);

  useEffect(() => {
    if (getProvinces?.data) {
      setProvinceOptions(
        getProvinces?.data?.map((province) => {
          return {
            label: province.name,
            value: province.id,
          };
        }) ?? [],
      );
    }
  }, [getProvinces?.data]);

  useEffect(() => {
    if (provinceId && provinceId !== "0" && provinceId !== "NaN") {
      getCitiesBasedOnProvinceId.refetch();
    }
  }, [provinceId]);

  useEffect(() => {
    if (getCitiesBasedOnProvinceId?.data) {
      setCityOptions(
        getCitiesBasedOnProvinceId?.data?.map((city) => {
          return {
            label: city.name,
            value: city.id,
          };
        }) ?? [],
      );
    }
  }, [getCitiesBasedOnProvinceId?.data]);

  return (
    <form onSubmit={handleSubmit(updateSubmit)}>
      <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box width={"calc(100% - 320px)"}>
          <Typography marginBottom={"2.4rem"} variant="body1">
            پروفایل
          </Typography>
          <Typography marginBottom={"2.4rem"} variant="caption">
            مشخصات هویتی
          </Typography>

          <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
            <FormControl className={`${classes.formField}`}>
              <Autocomplete
                disablePortal
                sx={{ width: "336px", "& > div div": { height: "56px" } }}
                options={[
                  { value: "male", label: "مرد" },
                  { value: "female", label: "زن" },
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...register("gender", {
                      required: "جنسیت الزامی است",
                    })}
                    InputLabelProps={{ shrink: true }}
                    label="جنسیت را انتخاب کنید"
                  />
                )}
              />
            </FormControl>
            <Box flexBasis={"336px"}>
              <TextField
                fullWidth
                {...register("familyName", {
                  required: "نام خانوادگی الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="نام خانوادگی"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box flexBasis={"336px"}>
              <TextField
                {...register("firstName", {
                  required: "نام  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="نام "
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.gender?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.familyName?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.firstName?.message?.toString()}
              </FormHelperText>
            </Box>
          </Box>
          <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
            <Box flexBasis={"336px"} display={"flex"} alignItems={"center"}>
              <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                <DatePicker
                  {...register("birthday", {
                    required: "تاریخ تولد  الزامی است",
                  })}
                  slots={{ openPickerIcon: CalendarDarkSvg }}
                  label="روز تولد"
                  onChange={(value) => {}}
                  sx={{ height: "56px" }}
                  slotProps={{
                    textField: { InputLabelProps: { shrink: true }, placeholder: "۱۳۷۰/۰۴/۱۲" },
                  }}
                />
              </LocalizationProvider>
            </Box>

            <Box flexBasis={"336px"}>
              <TextField
                {...register("natioalCode", {
                  required: "کد ملی  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="کد ملی"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box flexBasis={"336px"}>
              <TextField
                {...register("fathersName", {
                  required: "نام پدر  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="نام پدر "
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>
          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.birthday?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.natioalCode?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.fathersName?.message?.toString()}
              </FormHelperText>
            </Box>
          </Box>

          <Typography marginBottom={"2.4rem"} variant="caption">
            راه ارتباطی
          </Typography>

          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <TextField
                {...register("phone", {
                  required: "شماره تلفن همراه  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="شماره تلفن همراه"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <TextField
                {...register("parentsPhone", {
                  required: "شماره تلفن همراه والدین  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="شماره تلفن همراه والدین"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <TextField
                {...register("email", {
                  required: " ایمیل  الزامی است",
                })}
                className={classes.formField}
                variant="outlined"
                label="ایمیل"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.phone?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.parentsPhone?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.email?.message?.toString()}
              </FormHelperText>
            </Box>
          </Box>

          <Typography marginBottom={"4.4rem"} variant="caption">
            محل سکونت
          </Typography>

          <Box display={"flex"} marginTop={"1rem"} gap={"1rem"}>
            <Box display={"flex"} alignItems={"center"}>
              <Autocomplete
                {...register("province", {
                  required: " انتخاب استان الزامی است",
                })}
                disablePortal
                sx={{ width: "336px", "& > div div": { height: "56px" } }}
                options={provinceOptions}
                onChange={(e, province) => {
                  setProvinceId(province?.value);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ shrink: true }}
                    label="استان را انتخاب کنید"
                  />
                )}
              />
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Autocomplete
                {...register("city", {
                  required: "انتخاب شهر الزامی است",
                })}
                disablePortal
                sx={{ width: "336px", "& > div div": { height: "56px" } }}
                options={cityOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ shrink: true }}
                    label="شهر را انتخاب کنید"
                  />
                )}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.province?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.city?.message?.toString()}
              </FormHelperText>
            </Box>
          </Box>

          <Typography marginBottom={"2.4rem"} variant="caption">
            اطلاعات تحصیلی
          </Typography>

          <Box display={"flex"} marginTop={"1rem"} gap={"1rem"}>
            <Box display={"flex"} alignItems={"center"}>
              <Autocomplete
                {...register("fieldOfStudy", {
                  required: "انتخاب رشته تحصیلی  الزامی است",
                })}
                disablePortal
                sx={{ width: "336px", "& > div div": { height: "56px" } }}
                options={fieldOfStudyOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ shrink: true }}
                    label="رشته را انتخاب کنید"
                  />
                )}
              />
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Autocomplete
                {...register("gradeLevel", {
                  required: "انتخاب پایه تحصیلی  الزامی است",
                })}
                disablePortal
                sx={{ width: "336px", "& > div div": { height: "56px" } }}
                options={gradeLevelOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ shrink: true }}
                    label="پایه را انتخاب کنید"
                  />
                )}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.fieldOfStudy?.message?.toString()}
              </FormHelperText>
            </Box>
            <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
              <FormHelperText sx={{ color: "red" }}>
                {errors?.gradeLevel?.message?.toString()}
              </FormHelperText>
            </Box>
          </Box>

          <Box display={"flex"} gap={"1rem"}>
            <Box sx={{ flexBasis: "336px" }}></Box>
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ flexBasis: "336px" }}></Box>
            <Box
              display={"flex"}
              gap={"10px"}
              sx={{ flexBasis: "336px", justifyContent: "flex-end" }}
            >
              <ButtonKit
                sx={{ width: "140px", height: "48px", padding: "16px, 24px, 16px, 24px" }}
                size="small"
                variant="contained"
                type="submit"
              >
                تایید
              </ButtonKit>{" "}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography marginBottom={"5.8rem"} variant="body2">
            بارگزاری تصویر پروفایل
          </Typography>

          <Box
            display={"flex"}
            flexDirection={"column"}
            position={"relative"}
            borderRadius={"100%"}
          >
            {selectedFile ? (
              <>
                <Box
                  component={"img"}
                  src={preview ?? ""}
                  alt={"user image"}
                  width={136}
                  height={136}
                  onClick={() => profilePhotoRef.current.click()}
                  sx={{ cursor: "pointer" }}
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
                  <EditDarkSvg onClick={() => profilePhotoRef.current.click()} />{" "}
                  <input
                    type="file"
                    ref={(e) => {
                      profilePhotoRef.current = e;
                    }}
                    hidden
                    onChange={(e) => {
                      onSelectFile(e);
                    }}
                  />{" "}
                </IconButton>
              </>
            ) : (
              <>
                {" "}
                <Box
                  component={"img"}
                  src={UserImage}
                  alt={"user image"}
                  width={136}
                  height={136}
                  onClick={() => profilePhotoRef.current.click()}
                  sx={{ cursor: "pointer" }}
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
                  <EditDarkSvg onClick={() => profilePhotoRef.current.click()} />{" "}
                  <input
                    type="file"
                    ref={(e) => {
                      profilePhotoRef.current = e;
                    }}
                    hidden
                    onChange={(e) => {
                      onSelectFile(e);
                    }}
                  />{" "}
                </IconButton>
              </>
            )}

            <Box display={"flex"} justifyContent={"center"}>
              <ButtonKit sx={{ width: "115px" }} size="large" variant="outlined">
                <Typography variant="caption">تغییر رمز عبور</Typography>
              </ButtonKit>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Profile;
