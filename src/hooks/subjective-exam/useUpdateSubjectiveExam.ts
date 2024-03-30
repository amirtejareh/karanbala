import React from "react";
import { useMutation } from "react-query";
import { SubjectiveService } from "../../services";

const useUpdateSubjectiveExam = () => {
  return useMutation((request: any) => {
    return SubjectiveService.subjectiveControllerUpdate(request.id, {
      ...request,
    });
  });
};

export default useUpdateSubjectiveExam;
