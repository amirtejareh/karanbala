import React from "react";
import { useMutation } from "react-query";
import { SecondQuestionService } from "../../../services";

const useDeleteSecondQuestion = () => {
  return useMutation((request: string) => {
    return SecondQuestionService.secondQuestionControllerRemove(request);
  });
};

export default useDeleteSecondQuestion;
