import React from "react";
import { useMutation } from "react-query";
import { CreateExamService } from "../../services";

const useUpdateCreateExam = () => {
  return useMutation((request: any) => {
    return CreateExamService.createExamControllerUpdate(request.id, {
      ...request,
    });
  });
};

export default useUpdateCreateExam;
