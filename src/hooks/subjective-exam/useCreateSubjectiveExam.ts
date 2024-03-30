import React from "react";
import { useMutation } from "react-query";
import { StandardService, SubjectiveService } from "../../services";

const useCreateSubjectiveExam = () => {
  return useMutation((request: any) => {
    return SubjectiveService.subjectiveControllerCreate({ ...request });
  });
};

export default useCreateSubjectiveExam;
