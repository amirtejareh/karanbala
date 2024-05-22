import React from "react";
import { useMutation } from "react-query";
import { FirstQuestionService } from "../../../services";

const useDeleteFirstQuestion = () => {
  return useMutation((request: string) => {
    return FirstQuestionService.firstQuestionControllerRemove(request);
  });
};

export default useDeleteFirstQuestion;
