import React from "react";
import { useMutation } from "react-query";
import { SubjectiveService } from "../../services";

const useDeleteSubjectiveExam = () => {
  return useMutation((request: string) => {
    return SubjectiveService.subjectiveControllerRemove(request);
  });
};

export default useDeleteSubjectiveExam;
