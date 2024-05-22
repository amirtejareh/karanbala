import React from "react";
import { useMutation } from "react-query";
import { PrimaryQuestionService } from "../../../services";

const useDeletePrimaryQuestion = () => {
  return useMutation((request: string) => {
    return PrimaryQuestionService.primaryQuestionControllerRemove(request);
  });
};

export default useDeletePrimaryQuestion;
