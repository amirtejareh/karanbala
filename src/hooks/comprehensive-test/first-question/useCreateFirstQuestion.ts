import React from "react";
import { useMutation } from "react-query";
import { FirstQuestionService } from "../../../services";

const useCreateFirstQuestion = () => {
  return useMutation((request: any) => {
    return FirstQuestionService.firstQuestionControllerCreate({ ...request });
  });
};

export default useCreateFirstQuestion;
