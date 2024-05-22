import React from "react";
import { useMutation } from "react-query";
import { SecondQuestionService } from "../../../services";

const useUpdateSecondQuestion = () => {
  return useMutation((request: any) => {
    return SecondQuestionService.secondQuestionControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateSecondQuestion;
