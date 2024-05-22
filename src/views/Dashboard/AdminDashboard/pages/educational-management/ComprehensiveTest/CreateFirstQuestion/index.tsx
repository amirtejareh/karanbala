import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Switch,
  Autocomplete,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useGetGradeLevels from "../../../../../../../hooks/grade-level/useGetGradeLevels";
import useGetBooksBasedOnGradeLevels from "../../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useUpdateCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useUpdateCreateExam";
import useGetTermOfStudies from "../../../../../../../hooks/term-of-study/useGetTermOfStudies";
import useCreateCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useCreateCreateExam";
import { bytesToKilobytes } from "../../../../../../../utils/helper";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import { TableKit } from "../../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import useGetSubjectsBasedOnSections from "../../../../../../../hooks/subject/useGetSubjectsBasedOnSections";
import useGetSectionsBasedOnChapters from "../../../../../../../hooks/section/useGetSectionsBasedOnChapters";
import useGetCreateExamBasedOnStandardExamAndChapters from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndChapters";
import useDeleteCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useDeleteCreateExam";
import useGetCreateExamBasedOnStandardExamAndTerms from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndTerms";
import useGetCreateExamBasedOnSubjectiveExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExam";
import useGetCreateExamBasedOnSubjectiveExamAndSubjects from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExamAndSubjects";
import RichTextEditor from "../../../../../../../utils/ReactQuill";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-around",
  },
  fieldOfStudy: {
    margin: "0 50px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    margin: "1rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    boxShadow: `0px 1px 2px ${theme.palette.primary.main}`,
  },
  formTitle: {
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  formField: {
    margin: "1rem",
    width: "100%",
  },
  formButton: {
    margin: "1rem",
    width: "100%",
  },
}));

const CreateFirstQuestion = () => {
  const classes = useStyles();
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
  ];
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: 500,
        }}
      >
        <form>
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="آزمون مورد نظر را انتخاب کنید" />
              )}
            />
          </FormControl>
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">شماره سوال اصلی را انتخاب کنید</InputLabel>
            <Select required>
              <MenuItem value={"standard"}>استاندارد</MenuItem>
              <MenuItem value={"subjective"}>موضوعی</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formField}>
            <TextField type="number" InputLabelProps={{ shrink: true }} label="گزینه صحیح" />
          </FormControl>
          <FormControl className={classes.formField}>
            <Typography>سوال</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>

          <FormControl className={classes.formField}>
            <Typography>گزینه ۱</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>

          <FormControl className={classes.formField}>
            <Typography>گزینه ۲</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>
          <FormControl className={classes.formField}>
            <Typography>گزینه ۳</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>

          <FormControl className={classes.formField}>
            <Typography>گزینه ۴</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>
          <FormControl className={classes.formField}>
            <Typography>پاسخنامه</Typography>

            <RichTextEditor value={undefined} setValue={undefined} />
          </FormControl>

          <Button variant="contained" color="primary" className={classes.formButton} type="submit">
            ذخیره
          </Button>
        </form>
      </Box>
      <Box className={classes.fieldOfStudy}>
        <Typography>لیست سوال مشابه اول </Typography>
      </Box>
    </Box>
  );
};

export default CreateFirstQuestion;
