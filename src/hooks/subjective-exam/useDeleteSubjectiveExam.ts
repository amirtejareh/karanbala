import React from "react";
import { useMutation } from "react-query";
import { SampleTestQuestionsService, StandardService } from "../../services";

const useDeleteStandardExam = () => {
  return useMutation((request: string) => {
    return StandardService.standardControllerRemove(request);
  });
};

export default useDeleteStandardExam;
