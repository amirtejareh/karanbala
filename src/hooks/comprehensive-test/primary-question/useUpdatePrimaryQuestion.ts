import React from "react";
import { useMutation } from "react-query";
import { PrimaryQuestionService } from "../../../services";

const useUpdatePrimaryQuestion = () => {
  return useMutation((request: any) => {
    return PrimaryQuestionService.primaryQuestionControllerUpdate(request.id, { ...request });
  });
};

export default useUpdatePrimaryQuestion;
