import React from "react";
import { useMutation } from "react-query";
import { FirstQuestionService } from "../../../services";

const useUpdateFirstQuestion = () => {
  return useMutation((request: any) => {
    return FirstQuestionService.firstQuestionControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateFirstQuestion;
