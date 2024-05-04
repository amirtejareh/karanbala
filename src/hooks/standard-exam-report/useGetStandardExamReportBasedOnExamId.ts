import React from "react";
import { useQuery } from "react-query";
import { ReportStandardExamService, StandardService } from "../../services";

const useGetStandardExamReportBasedOnExamId = (examId: string, username: string) => {
  return useQuery(
    ["Get-All-Book-References-Based-On-Objective-Test-Id"],
    async () => {
      return await ReportStandardExamService.reportStandardControllerFindStandardReportBasedOnExamId(
        examId,
        username,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetStandardExamReportBasedOnExamId;
