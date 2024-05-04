import React from "react";
import { useMutation } from "react-query";
import { ReportSubjectiveExamService, SubjectiveService } from "../../services";

const useCreateSubjectiveExamReport = () => {
  return useMutation((request: any) => {
    return ReportSubjectiveExamService.reportSubjectiveControllerCreate({ ...request });
  });
};

export default useCreateSubjectiveExamReport;
