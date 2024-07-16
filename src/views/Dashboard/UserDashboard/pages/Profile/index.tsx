import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

import React, { useEffect, useRef, useState } from "react";
import { ButtonKit } from "../../../../../components/kit/Button";
import { CalendarDarkSvg, EditDarkSvg } from "../../../../../assets";
import UserImage from "../../../../../assets/images/user.jpg";
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useGetProvinces from "../../../../../hooks/province/useGetProvinces";
import useGetCitiesBasedOnProvinceId from "../../../../../hooks/city/useGetCitiesBasedOnProvinceId";
import useGetFieldOfStudies from "../../../../../hooks/field-of-study/useGetFieldOfStudies";
import useGetGradeLevels from "../../../../../hooks/grade-level/useGetGradeLevels";
import { toast } from "react-toastify";
import useUpdateUser from "../../../../../hooks/user/useUpdateUser";
import { userStore } from "../../../../../stores";
import { ModalKit } from "../../../../../components/kit/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useGetUserBasedOnUsername from "../../../../../hooks/user/useGetUser";
import moment from "moment-jalaali";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  formField: {
    margin: "1rem 0",
    flexBasis: "336px",
    height: "56px !important",
  },
  textField: {
    marginTop: "5px",
    width: "100%",
  },
}));

export const ModalChangePassword = (handleApproved) => {
  const classes = useStyles();
  const updateUserData = useUpdateUser();
  const userData: any = userStore((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const updateSubmit = (data) => {
    if (data.password !== data.repassword) {
      toast.error(" رمز عبور و تکرار رمز عبور مطابقت ندارند");
      return;
    }
    data.username = userData?.username;
    delete data.repassword;

    updateUserData.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode === 200) {
          setLoading(false);
          handleApproved.close();
          toast.success(result.message);
        } else {
          setLoading(false);
          if (Array.isArray(result.message)) {
            toast.error(
              <ul>
                {result.message.map((msg: string) => (
                  <li key={msg}>{msg}</li>
                ))}
              </ul>,
            );
          } else {
            toast.error(
              <ul>
                <li key={result.message}>{result.message}</li>
              </ul>,
            );
          }
        }
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(updateSubmit)}>
      <div style={{ height: "310px", padding: "24px 0px  24px  0px" }}>
        <FormControl className={classes.textField}>
          <TextField
            {...register("password", {
              required: "رمز عبور را وارد کنید",
            })}
            label="رمز عبور"
            id="outlined-start-adornment"
            fullWidth
            type={showPassword ? "text" : "password"}
            sx={{ height: "56px", marginTop: "28px" }}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ cursor: "pointer" }}
                  position="start"
                >
                  {showPassword ? (
                    <>
                      <VisibilityIcon />
                    </>
                  ) : (
                    <>
                      <VisibilityOffIcon />
                    </>
                  )}
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ marginTop: "24px !important" }} className={classes.textField}>
          <TextField
            {...register("repassword", {
              required: "تکرار رمز عبور را وارد کنید",
            })}
            label="تکرار رمز عبور"
            id="outlined-start-adornment"
            fullWidth
            type={showRePassword ? "text" : "password"}
            sx={{ height: "56px", marginTop: "28px" }}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowRePassword(!showRePassword)}
                  sx={{ cursor: "pointer" }}
                  position="start"
                >
                  {showRePassword ? (
                    <>
                      <VisibilityIcon />
                    </>
                  ) : (
                    <>
                      <VisibilityOffIcon />
                    </>
                  )}
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </FormControl>
        <div></div>
        <ButtonKit
          type={"submit"}
          fullWidth
          sx={{ height: "48px", marginTop: "28px" }}
          variant="contained"
        >
          تایید
        </ButtonKit>
      </div>
    </form>
  );
};

const Profile = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const classes = useStyles();
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [familyNameValue, setFamilyNameValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [nationalCodeValue, setNationalCodeValue] = useState("");
  const [fathersNameValue, setFathersNameValue] = useState("");
  const [mobileValue, setMobileValue] = useState("");
  const [parentsPhoneValue, setParentsPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [gradeLevelOptions, setGradeLevelOptions] = useState([]);
  const [fieldOfStudyOptions, setfieldOfStudyOptions] = useState([]);
  const [genderValue, setGenderValue] = useState(null);
  const [sloganValue, setSloganValue] = useState(null);
  const [provinceId, setProvinceId] = useState(null);
  const [gradeLevelId, setGradeLevelId] = useState(null);
  const [fieldOfStudyId, setFieldOfStudyId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const getProvinces = useGetProvinces();
  const getCitiesBasedOnProvinceId = useGetCitiesBasedOnProvinceId(
    provinceId?.value ? provinceId.value : provinceId,
  );
  const getFiledOfStudies = useGetFieldOfStudies();
  const getGradeLevels = useGetGradeLevels();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const updateUserData = useUpdateUser();
  const userData: any = userStore((state) => state.user);
  const setUserData: any = userStore((state) => state.setUser);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const sloganOptions = [
    { value: "1", label: "من اهل جنگیدن هستم و از پا نمی افتم" },
    { value: "2", label: "صبر، حوصله، دقت و پشتکار" },
    { value: "3", label: "به کسی کاری ندارم، هدف مشخص است" },
    { value: "4", label: "انحراف به چپ ممنوع، مستقیم تا مقصد" },
    { value: "5", label: "جاده باریک و پر سنگلاخ، ولی من قوی ترم" },
  ];

  const genderOptions = [
    { value: "male", label: "مرد" },
    { value: "female", label: "زن" },
  ];

  const getUser: any = useGetUserBasedOnUsername(userData?.username);

  useEffect(() => {
    if (userData?.username) {
      getUser.refetch();
    }
  }, [userData?.username]);

  useEffect(() => {
    if (getUser?.data?.[0]) {
      setValue("province", getUser?.data?.[0]?.province ?? provinceId);
      setValue("city", getUser?.data?.[0]?.city ?? cityId);
      setValue("gradeLevel", getUser?.data?.[0]?.gradeLevel[0] ?? gradeLevelId);
      setValue("fieldOfStudy", getUser?.data?.[0]?.fieldOfStudy ?? fieldOfStudyId);
      setValue("firstName", getUser?.data?.[0]?.firstName ?? firstNameValue);
      setValue("familyName", getUser?.data?.[0]?.familyName ?? familyNameValue);
      setValue("parentsPhone", getUser?.data?.[0]?.parentsPhone ?? parentsPhoneValue);
      setValue("fathersName", getUser?.data?.[0]?.fathersName ?? fathersNameValue);
      setValue("email", getUser?.data?.[0]?.email ?? emailValue);
      setValue("mobile", getUser?.data?.[0]?.mobile ?? mobileValue);
      setValue("gender", getUser?.data?.[0]?.gender ?? genderValue);
      setValue("national_id_number", getUser?.data?.[0]?.national_id_number ?? nationalCodeValue);

      if (getUser?.data?.[0]?.birthday) {
        setValue(
          "birthday",
          moment(
            moment(getUser?.data?.[0]?.birthday?.split("T")[0]).format("jYYYY/jM/jD"),
            "jYYYY/jM/jD",
          ).toDate(),
        );
      }

      if (getUser?.data?.[0]?.slogan) {
        setSloganValue({
          value: getUser?.data?.[0]?.slogan,
          label: sloganOptions.find((element) => element?.value === getUser?.data?.[0]?.slogan)
            ?.label,
        });
      }
      if (getUser?.data?.[0]?.gender) {
        setGenderValue({
          value: getUser?.data?.[0]?.gender,
          label: genderOptions.find((element) => element?.value === getUser?.data?.[0]?.gender)
            ?.label,
        });
      }

      if (getUser?.data?.[0]?.city) {
        setCityId({
          value: getUser?.data?.[0]?.city,
          label: cityOptions?.find((element) => element?.value === getUser?.data?.[0]?.city)?.label,
        });
      }
    }
  }, [getUser?.data?.[0], cityOptions]);

  useEffect(() => {
    setProvinceId(getUser?.data?.[0]?.province);
    setCityId(getUser?.data?.[0]?.city);
    setGradeLevelId(getUser?.data?.[0]?.gradeLevel[0]);
    setFieldOfStudyId(getUser?.data?.[0]?.fieldOfStudy);
    setFirstNameValue(getUser?.data?.[0]?.firstName);
    setFamilyNameValue(getUser?.data?.[0]?.familyName);
    setParentsPhoneValue(getUser?.data?.[0]?.parentsPhone);
    setFathersNameValue(getUser?.data?.[0]?.fathersName);
    setEmailValue(getUser?.data?.[0]?.email);
    setMobileValue(getUser?.data?.[0]?.mobile);
    if (getUser?.data?.[0]?.gender) {
      setGenderValue({
        value: getUser?.data?.[0]?.gender,
        label: genderOptions.find((element) => element.value === getUser?.data?.[0]?.gender)?.label,
      });
    }

    setNationalCodeValue(getUser?.data?.[0]?.national_id_number);
  }, [getUser?.data?.[0]]);

  useEffect(() => {
    if (getUser?.data?.[0]?.province) {
      setProvinceId({
        value: Number(getUser?.data?.[0]?.province),
        label: provinceOptions?.find((element) => element?.value == getUser?.data?.[0]?.province)
          ?.label,
      });
    }
  }, [provinceOptions]);

  useEffect(() => {
    if (getUser?.data?.[0]?.province) {
      setGradeLevelId({
        value: getUser?.data?.[0]?.gradeLevel[0],
        label: gradeLevelOptions?.find(
          (element) => element?.value == getUser?.data?.[0]?.gradeLevel[0],
        )?.label,
      });
    }
  }, [gradeLevelOptions]);

  useEffect(() => {
    if (getUser?.data?.[0]?.province) {
      setFieldOfStudyId({
        value: getUser?.data?.[0]?.fieldOfStudy,
        label: fieldOfStudyOptions?.find(
          (element) => element?.value == getUser?.data?.[0]?.fieldOfStudy,
        )?.label,
      });
    }
  }, [fieldOfStudyOptions]);

  useEffect(() => {
    if (getUser?.data?.[0]?.gradeLevelMaxUpdated && getUser?.data?.[0]?.gradeLevelMaxUpdated < 2) {
      let count = getUser?.data?.[0]?.gradeLevelMaxUpdated;

      toast.error(
        <>
          شما تنها <b style={{ color: "red", textDecoration: "underline" }}>{count}</b> بار دیگر
          مجاز به تغییر پایه تحصیلی هستید
        </>,
      );
    }
  }, [getUser?.data?.[0]?.gradeLevelMaxUpdated]);

  const profilePhotoRef = useRef<any>();

  const onSelectFile = (e: any) => {
    if (!profilePhotoRef.current.files || profilePhotoRef.current.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(profilePhotoRef.current.files[0]);
  };

  const updateSubmit = (data) => {
    data.username = userData?.username;

    data.profilePhoto = selectedFile;
    updateUserData.mutate(
      {
        ...data,
        province: provinceId?.value,
        city: cityId?.value,
        gender: genderValue?.value,
        fieldOfStudy: fieldOfStudyId.value,
        gradeLevel: gradeLevelId.value,
      },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode === 200) {
            if (gradeLevelId?.label) {
              setUserData({ ...userData, gradeLevel: [{ title: gradeLevelId.label }] });
            }

            navigate("/dashboard/user/purchase");

            setLoading(false);

            toast.success(result.message);
          } else {
            setLoading(false);
            toast(result.message);
          }
        },
      },
    );
  };

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
    if (provinceId && provinceId !== "0") {
      getCitiesBasedOnProvinceId.refetch();
    }
  }, [provinceId]);

  useEffect(() => {
    if (getCitiesBasedOnProvinceId?.data) {
      setCityOptions(
        getCitiesBasedOnProvinceId?.data?.map((city) => {
          return {
            label: city.name,
            value: city._id,
          };
        }) ?? [],
      );
    }
  }, [getCitiesBasedOnProvinceId?.data]);

  return (
    <>
      <ModalKit
        onClose={() => {
          setModalOpen(false);
        }}
        modalState={modalOpen}
        title={<>تغییر رمز عبور</>}
        maxWidth={"sm"}
      >
        {({ handleApproved }: any) => <ModalChangePassword close={handleApproved} />}
      </ModalKit>
      <form onSubmit={handleSubmit(updateSubmit)}>
        <Box display={"flex"} gap={"20px"} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Box className="profileWrapper" width={"calc(100% - 100px)"}>
            <Typography marginBottom={"2.4rem"} variant="body1">
              پروفایل
            </Typography>
            <Typography marginBottom={"2.4rem"} variant="caption">
              مشخصات هویتی
            </Typography>

            <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="gender"
                  rules={{ required: "جنسیت الزامی است" }}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      sx={{ "& > div div": { height: "56px" } }}
                      options={[
                        { value: "male", label: "مرد" },
                        { value: "female", label: "زن" },
                      ]}
                      value={genderValue}
                      getOptionLabel={(option) => option.label}
                      onChange={(event, item) => {
                        setGenderValue({
                          value: item?.value,
                          label: genderOptions.find((element) => element.value === item?.value)
                            ?.label,
                        });
                        field.onChange(item?.value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="جنسیت"
                          error={!!errors.gender}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>
              <Box className={classes.formField}>
                <Controller
                  control={control}
                  name="familyName"
                  rules={{ required: "نام خانوادگی الزامی است" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="outlined"
                      value={familyNameValue}
                      onChange={(e) => {
                        setFamilyNameValue(e.target.value);
                        field.onChange(e);
                      }}
                      label="نام خانوادگی"
                      sx={{ "& > div": { height: "56px" } }}
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.familyName}
                    />
                  )}
                />
              </Box>
              <Box className={classes.formField}>
                <Controller
                  control={control}
                  name="firstName"
                  rules={{ required: "نام الزامی است" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ "& > div": { height: "56px" } }}
                      value={firstNameValue}
                      onChange={(e) => {
                        setFirstNameValue(e.target.value);
                        field.onChange(e);
                      }}
                      variant="outlined"
                      label="نام "
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.firstName}
                    />
                  )}
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
              <Box className={classes.formField} display={"flex"} alignItems={"center"}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                  <Controller
                    control={control}
                    name="birthday"
                    rules={{ required: "تاریخ تولد  الزامی است" }}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        slots={{ openPickerIcon: CalendarDarkSvg }}
                        label="روز تولد"
                        onChange={(value) => field.onChange(value)}
                        sx={{
                          "& > div": { height: "56px" },
                          "& div > button": { padding: "0 20px" },
                        }}
                        slotProps={{
                          textField: {
                            InputLabelProps: { shrink: true },
                            placeholder: "۱۳۷۰/۰۴/۱۲",
                            error: !!errors.birthday,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Box className={classes.formField}>
                <Controller
                  control={control}
                  name="national_id_number"
                  rules={{
                    required: "کد ملی  الزامی است",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ "& > div": { height: "56px" } }}
                      variant="outlined"
                      value={nationalCodeValue}
                      onChange={(e) => {
                        setNationalCodeValue(e.target.value);
                        field.onChange(e);
                      }}
                      label="کد ملی"
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.national_id_number}
                    />
                  )}
                />
              </Box>
              <Box className={classes.formField}>
                <Controller
                  control={control}
                  name="fathersName"
                  rules={{
                    required: "نام پدر  الزامی است",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="outlined"
                      label="نام پدر "
                      value={fathersNameValue}
                      onChange={(e) => {
                        setFathersNameValue(e.target.value);
                        field.onChange(e);
                      }}
                      sx={{ "& > div": { height: "56px" } }}
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.fathersName}
                    />
                  )}
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
                  {errors?.national_id_number?.message?.toString()}
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
              <Box className={classes.formField} gap={"1px"} display={"flex"} alignItems={"center"}>
                <Controller
                  control={control}
                  name="mobile"
                  rules={{
                    required: "شماره تلفن همراه  الزامی است",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ "& > div": { height: "56px" } }}
                      variant="outlined"
                      label="شماره تلفن همراه"
                      value={mobileValue}
                      onChange={(e) => {
                        setMobileValue(e.target.value);
                        field.onChange(e);
                      }}
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.mobile}
                    />
                  )}
                />
              </Box>

              <Box className={classes.formField} gap={"1px"} display={"flex"} alignItems={"center"}>
                <Controller
                  control={control}
                  name="parentsPhone"
                  rules={{
                    required: "شماره تلفن همراه والدین  الزامی است",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ "& > div": { height: "56px" } }}
                      variant="outlined"
                      value={parentsPhoneValue}
                      onChange={(e) => {
                        setParentsPhoneValue(e.target.value);
                        field.onChange(e);
                      }}
                      label="شماره تلفن همراه والدین"
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.parentsPhone}
                    />
                  )}
                />
              </Box>
              <Box className={classes.formField} gap={"1px"} display={"flex"} alignItems={"center"}>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: " ایمیل  الزامی است",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ "& > div": { height: "56px" } }}
                      variant="outlined"
                      label="ایمیل"
                      value={emailValue}
                      onChange={(e) => {
                        setEmailValue(e.target.value);
                        field.onChange(e);
                      }}
                      type="text"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.email}
                    />
                  )}
                />
              </Box>
            </Box>

            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
                <FormHelperText sx={{ color: "red" }}>
                  {errors?.mobile?.message?.toString()}
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

            <Box display={"flex"} marginTop={"1rem"} gap={"1rem"} flexWrap={"wrap"}>
              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="province"
                  rules={{ required: "انتخاب استان الزامی است" }}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      options={provinceOptions}
                      getOptionLabel={(option) => option.label}
                      value={provinceId}
                      onChange={(event, item) => {
                        setProvinceId(item);
                        onChange(item?.value);
                      }}
                      sx={{ "& > div div": { height: "56px" } }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="استان"
                          error={!!errors.province}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>

              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="city"
                  rules={{ required: "انتخاب شهر الزامی است" }}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      options={cityOptions}
                      getOptionLabel={(option) => option.label}
                      value={cityId}
                      onChange={(event, item) => {
                        setCityId(item);
                        onChange(item?.value);
                      }}
                      sx={{ "& > div div": { height: "56px" } }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="شهر"
                          error={!!errors.city}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>
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

            <Box display={"flex"} marginTop={"1rem"} gap={"1rem"} flexWrap={"wrap"}>
              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="fieldOfStudy"
                  rules={{ required: "انتخاب رشته الزامی است" }}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      options={fieldOfStudyOptions}
                      sx={{ "& > div div": { height: "56px" } }}
                      getOptionLabel={(option) => option.label}
                      value={fieldOfStudyId}
                      onChange={(event, item) => {
                        setFieldOfStudyId(item);

                        onChange(item?.value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="رشته"
                          error={!!errors.fieldOfStudy}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>

              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="gradeLevel"
                  rules={{ required: "انتخاب پایه الزامی است" }}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      options={gradeLevelOptions}
                      sx={{ "& > div div": { height: "56px" } }}
                      getOptionLabel={(option) => option.label}
                      value={gradeLevelId}
                      onChange={(event, item) => {
                        setGradeLevelId(item);
                        onChange(item?.value);
                      }}
                      disabled={getUser?.data?.[0]?.gradeLevelMaxUpdated >= 2 ? true : false}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="پایه"
                          error={!!errors.gradeLevel}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>
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

            <Typography marginBottom={"2.4rem"} variant="caption">
              شعار
            </Typography>

            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              <FormControl className={classes.formField}>
                <Controller
                  control={control}
                  name="slogan"
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      sx={{ "& > div div": { height: "56px" } }}
                      options={[
                        { value: "1", label: "من اهل جنگیدن هستم و از پا نمی افتم" },
                        { value: "2", label: "صبر، حوصله، دقت و پشتکار" },
                        { value: "3", label: "به کسی کاری ندارم، هدف مشخص است" },
                        { value: "4", label: "انحراف به چپ ممنوع، مستقیم تا مقصد" },
                        { value: "5", label: "جاده باریک و پر سنگلاخ، ولی من قوی ترم" },
                      ]}
                      getOptionLabel={(option) => option.label}
                      value={sloganValue}
                      onChange={(event, item) => {
                        setSloganValue({
                          value: item?.value,
                          label: sloganOptions.find((element) => element.value === item?.value)
                            ?.label,
                        });
                        onChange(item?.value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                          label="شعار"
                          error={!!errors.slogan}
                        />
                      )}
                    />
                  )}
                />
              </FormControl>
            </Box>

            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              <Box flexBasis={"336px"} gap={"1px"} display={"flex"} alignItems={"center"}>
                <FormHelperText sx={{ color: "red" }}>
                  {errors?.slogan?.message?.toString()}
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
                  {getUser?.data?.[0]?.profilePhoto ? (
                    <Box
                      component={"img"}
                      src={`${process.env.REACT_APP_BASE_URL}/${getUser.data[0]?.profilePhoto}`}
                      alt={"user image"}
                      width={136}
                      height={136}
                      onClick={() => profilePhotoRef.current.click()}
                      sx={{ cursor: "pointer" }}
                      marginBottom={"2rem"}
                    />
                  ) : (
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
                  )}
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
                <ButtonKit
                  onClick={() => setModalOpen(true)}
                  sx={{ width: "115px" }}
                  size="large"
                  variant="outlined"
                >
                  <Typography variant="caption">تغییر رمز عبور</Typography>
                </ButtonKit>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Profile;
