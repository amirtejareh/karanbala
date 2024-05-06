import React from "react";
import { useQuery } from "react-query";
import { ReportSubjectiveExamService } from "../../services";

const useGetSubjectiveExamReportBasedOnExamId = (examId: string, username: string) => {
  return useQuery(
    ["Get-All-Book-References-Based-On-Objective-Test-Id"],
    async () => {
      return await ReportSubjectiveExamService.reportSubjectiveControllerFindSubjectiveReportBasedOnExamId(
        examId,
        username,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetSubjectiveExamReportBasedOnExamId;
