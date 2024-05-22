import React from "react";
import { useMutation } from "react-query";
import { SecondQuestionService } from "../../../services";

const useCreateSecondQuestion = () => {
  return useMutation((request: any) => {
    return SecondQuestionService.secondQuestionControllerCreate({ ...request });
  });
};

export default useCreateSecondQuestion;
