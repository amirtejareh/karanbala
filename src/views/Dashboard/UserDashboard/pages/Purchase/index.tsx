import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import React, { useState } from "react";
import { ButtonKit } from "../../../../../components/kit/Button";
import AssessmentImage from "../../../../../assets/images/assessment.png";
import TutorialImage from "../../../../../assets/images/tutorial.png";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) => ({
  formField: {
    margin: "1rem 0",
    width: "100%",
  },
}));
const Purchase = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const [type, setType] = useState<string>("multipleChoiceTest");
  const [term, setTerm] = useState<string>("multipleChoiceTest");
  const [books, setBooks] = useState<string>("multipleChoiceTest");
  const [duration, setDuration] = useState<number>();
  const [tutorialExamType, setTutorialExamType] = useState<string>("multipleChoiceTest");
  const [examState, setExamState] = useState(0);
  const [number, setNumber] = useState(0);
  const [discount, setDiscount] = useState();
  const [totalAmountWithDiscount, setTotalAmountWithDiscount] = useState(0);
  const [tutorailTotalAmountWithDiscount, setTutorailTotalAmountWithDiscount] = useState(0);
  const [tutorailTotalAmount, setTutorailTotalAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  interface IGenerateSubscriptionBoxes {
    imageLink: string;
    bgColor: string;
    type: "Assessment" | "Tutorial";
  }

  const {
    register,
    formState: { errors },
  } = useForm();
  const GenerateSubscriptionBoxes = ({ imageLink, bgColor, type }: IGenerateSubscriptionBoxes) => {
    return (
      <Box
        boxSizing={"content-box"}
        padding={"1.6rem"}
        sx={{
          backgroundColor: "#FBFDFF",
          boxShadow: " 0px 8px 16px 0px rgba(37, 45, 55, 0.16)",
          width: type === "Assessment" ? "466px" : "458px",
          maxWidth: "100%",
          flex: "1 0 auto",
          "@media (max-width: 620px)": {
            width: "300px",
          },
        }}
      >
        <Box
          sx={{ backgroundColor: bgColor }}
          display={"flex"}
          padding={"1.6rem"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Box marginBottom={"1.6rem"} justifyContent={"space-around"}>
              <Typography fontSize={"2.4rem"} fontWeight={"700"}>
                {type === "Assessment" ? "آزمون" : "آموزش"}
              </Typography>{" "}
            </Box>
            <Box>
              <Typography fontSize={"1.4rem"}>
                {type === "Assessment" ? "تستی، تشریحی" : "ترم اول، ترم دوم، سالیانه"}
              </Typography>{" "}
            </Box>
          </Box>
          <Box paddingBottom={`${type === "Assessment" ? "0" : "1.1rem"}`}>
            <Box component={"img"} src={`${imageLink}`} />
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <Box margin={" 4rem 0"}>
        <Typography variant="body2">
          ابتدا یکی از موارد زیر را برای خرید یا تمدید اشتراک انتخاب کنید
        </Typography>
      </Box>

      <Box>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            value={examState}
            name="radio-buttons-group"
            onClick={(e: any) => {}}
          >
            <Box
              gap={"50px"}
              display={"flex"}
              flexWrap={"wrap"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Box>
                <FormControlLabel
                  value={0}
                  control={
                    <Radio
                      onClick={(e: any) => {
                        setExamState(0);
                      }}
                    />
                  }
                  label={
                    <Box>
                      <GenerateSubscriptionBoxes
                        type="Tutorial"
                        bgColor={theme.palette.others.info.light}
                        imageLink={TutorialImage}
                      />
                    </Box>
                  }
                />
              </Box>
              <Box>
                <FormControlLabel
                  value={1}
                  control={
                    <Radio
                      onClick={(e: any) => {
                        setExamState(1);
                      }}
                    />
                  }
                  label={
                    <Box>
                      <GenerateSubscriptionBoxes
                        type="Assessment"
                        bgColor={theme.palette.secondary["200"]}
                        imageLink={AssessmentImage}
                      />
                    </Box>
                  }
                />
              </Box>
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>

      {examState === 0 && (
        <Box margin={"4rem 0"}>
          <Box display={"grid"} gap={"3rem"} gridTemplateColumns={"2fr 2fr 2fr"}>
            <Box>
              <FormControl className={`${classes.formField} $`}>
                <InputLabel id="demo-simple-select-label">موارد اشتراکی </InputLabel>
                <Select
                  {...register("tutorialExamType", {
                    required: "لطفا نوع مورد اشتراکی را مشخص کنید",
                  })}
                  value={tutorialExamType}
                  onChange={(e: any) => setTutorialExamType(e.target.value)}
                >
                  <MenuItem key={0} value={"0"}>
                    آزمون انتخابی
                  </MenuItem>

                  <MenuItem key={1} value={"1"}>
                    تست‌های جامع
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl className={`${classes.formField} $`}>
                <InputLabel id="demo-simple-select-label"> مدت زمان </InputLabel>
                <Select
                  {...register("duration", {
                    required: "لطفا مدت زمان را مشخص کنید",
                  })}
                  value={tutorialExamType}
                  onChange={(e: any) => setDuration(e.target.value)}
                >
                  <MenuItem value={0}>ترم اول</MenuItem>
                  <MenuItem value={1}>ترم دوم</MenuItem>
                  <MenuItem value={2}>سالیانه </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                {...register("discount")}
                onChange={(e: any) => setDiscount(e.target.value)}
                className={classes.formField}
                variant="outlined"
                label="کد تخفیف"
                type="text"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box display={"grid"} gap={"3rem"} gridTemplateColumns={"2fr 2fr"}>
            <Box>
              <TextField
                {...register("tutorailTotalAmount")}
                onChange={(e: any) => setTutorailTotalAmount(e.target.value)}
                className={classes.formField}
                variant="outlined"
                label="مبلغ کل"
                type="number"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box>
              <TextField
                {...register("tutorailTotalAmountWithDiscount")}
                onChange={(e: any) => setTutorailTotalAmountWithDiscount(e.target.value)}
                className={classes.formField}
                variant="outlined"
                label="مبلغ کل با تخفیف"
                type="number"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box display={"grid"} gap={"3rem"} gridTemplateColumns={"2fr 2fr"}>
            <Box></Box>
            <Box>
              {" "}
              <ButtonKit size="large" fullWidth variant="contained">
                <Typography fontSize="1.4rem"> خرید/تمدید</Typography>
              </ButtonKit>
            </Box>
          </Box>
        </Box>
      )}

      {examState === 1 && (
        <>
          {type === "multipleChoiceTest" && (
            <Box margin={"4rem 0"} display={"grid"} gap={"3rem"} gridTemplateColumns={"2fr 2fr "}>
              <Box>
                <Box>
                  <FormControl className={`${classes.formField} $`}>
                    <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                    <Select
                      {...register("type", {
                        required: "لطفا نوع آزمون را مشخص کنید",
                      })}
                      value={type}
                      onChange={(e: any) => setType(e.target.value)}
                    >
                      <MenuItem value={"multipleChoiceTest"}>تستی</MenuItem>
                      <MenuItem value={"essayTest"}>تشریحی</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <TextField
                    {...register("discount")}
                    onChange={(e: any) => setDiscount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="کد تخفیف"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box>
                  <TextField
                    {...register("totalAmountWithDiscount")}
                    onChange={(e: any) => setTotalAmountWithDiscount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="مبلغ کل با تخفیف"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box>
                    <FormControl className={`${classes.formField} $`}>
                      <InputLabel id="demo-simple-select-label">شماره آزمون</InputLabel>
                      <Select
                        {...register("number", {
                          required: "لطفا شماره آزمون را مشخص کنید",
                        })}
                        value={number}
                        onChange={(e: any) => setNumber(e.target.value)}
                      >
                        <MenuItem value={"1"}>1</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box>
                  <TextField
                    {...register("totalAmount")}
                    onChange={(e: any) => setTotalAmount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="مبلغ کل"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                  <ButtonKit size="large" fullWidth variant="contained">
                    <Typography fontSize="1.4rem"> خرید/تمدید</Typography>
                  </ButtonKit>
                </Box>
              </Box>
            </Box>
          )}
          {type === "essayTest" && (
            <Box margin={"4rem 0"} display={"grid"} gap={"3rem"} gridTemplateColumns={"2fr 2fr"}>
              <Box>
                <Box>
                  <FormControl className={`${classes.formField} $`}>
                    <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                    <Select
                      {...register("type", {
                        required: "لطفا نوع آزمون را مشخص کنید",
                      })}
                      value={type}
                      onChange={(e: any) => setType(e.target.value)}
                    >
                      <MenuItem value={"multipleChoiceTest"}>تستی</MenuItem>
                      <MenuItem value={"essayTest"}>تشریحی</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl className={`${classes.formField} $`}>
                    <InputLabel id="demo-simple-select-label">شماره آزمون</InputLabel>
                    <Select
                      {...register("number", {
                        required: "لطفا شماره آزمون را مشخص کنید",
                      })}
                      value={number}
                      onChange={(e: any) => setNumber(e.target.value)}
                    >
                      <MenuItem key={1} value={"1"}>
                        1
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <FormControl className={`${classes.formField} $`}>
                  <InputLabel id="demo-simple-select-label">ترم مورد نظر </InputLabel>
                  <Select
                    {...register("term", {
                      required: "لطفا ترم را مشخص کنید",
                    })}
                    value={term}
                    onChange={(e: any) => setTerm(e.target.value)}
                  >
                    <MenuItem value={0}>ترم اول</MenuItem>
                    <MenuItem value={1}>ترم دوم</MenuItem>
                    <MenuItem value={2}>سالیانه </MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <FormControl className={`${classes.formField} $`}>
                    <InputLabel id="demo-simple-select-label">کتاب مورد نظر</InputLabel>
                    <Select
                      {...register("books", {
                        required: "لطفا کتاب مورد نظر را مشخص کنید",
                      })}
                      value={books}
                      onChange={(e: any) => setBooks(e.target.value)}
                    >
                      <MenuItem value={"0"}>فیزیک۱</MenuItem>
                      <MenuItem value={"1"}>فیزیک۲</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Box>
                  <TextField
                    {...register("totalAmount")}
                    onChange={(e: any) => setTotalAmount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="مبلغ کل"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box>
                  <TextField
                    {...register("discount")}
                    onChange={(e: any) => setDiscount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="کد تخفیف"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box>
                  <TextField
                    {...register("tutorailTotalAmountWithDiscount")}
                    onChange={(e: any) => setTutorailTotalAmountWithDiscount(e.target.value)}
                    className={classes.formField}
                    variant="outlined"
                    label="مبلغ کل با تخفیف"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                  <ButtonKit size="large" fullWidth variant="contained">
                    <Typography fontSize="1.4rem"> خرید/تمدید</Typography>
                  </ButtonKit>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Purchase;
