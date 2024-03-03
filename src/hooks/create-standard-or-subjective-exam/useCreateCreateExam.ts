import React from "react";
import { useMutation } from "react-query";
import { CreateExamService } from "../../services";

const useCreateCreateExam = () => {
  return useMutation((request: any) => {
    return CreateExamService.createExamControllerCreate({ ...request });
  });
};

export default useCreateCreateExam;
