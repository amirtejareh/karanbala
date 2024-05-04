import React from "react";
import { useMutation } from "react-query";
import { ReportStandardExamService, StandardService } from "../../services";

const useCreateStandardExamReport = () => {
  return useMutation((request: any) => {
    return ReportStandardExamService.reportStandardControllerCreate({ ...request });
  });
};

export default useCreateStandardExamReport;
