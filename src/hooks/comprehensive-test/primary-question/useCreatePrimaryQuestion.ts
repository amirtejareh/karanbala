import React from "react";
import { useMutation } from "react-query";
import { PrimaryQuestionService } from "../../../services";

const useCreatePrimaryQuestion = () => {
  return useMutation((request: any) => {
    return PrimaryQuestionService.primaryQuestionControllerCreate({ ...request });
  });
};

export default useCreatePrimaryQuestion;
