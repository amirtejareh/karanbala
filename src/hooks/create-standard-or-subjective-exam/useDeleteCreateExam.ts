import React from "react";
import { useMutation } from "react-query";
import { CreateExamService } from "../../services";

const useDeleteCreateExam = () => {
  return useMutation((request: string) => {
    return CreateExamService.createExamControllerRemove(request);
  });
};

export default useDeleteCreateExam;
