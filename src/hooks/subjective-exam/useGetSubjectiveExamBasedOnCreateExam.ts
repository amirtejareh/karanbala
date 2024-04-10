import React from "react";
import { useQuery } from "react-query";
import { StandardService, SubjectiveService } from "../../services";

const useGetSubjectiveExamBasedOnCreateExam = (
  page: number,
  limit: number,
  createExamId: string,
) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Create-Exam"],
    async () => {
      return await SubjectiveService.subjectiveControllerFindSubjectiveExamsBasedOnCreateExam(
        page,
        limit,
        createExamId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetSubjectiveExamBasedOnCreateExam;
