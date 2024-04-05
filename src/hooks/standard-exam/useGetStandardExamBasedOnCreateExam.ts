import React from "react";
import { useQuery } from "react-query";
import { StandardService } from "../../services";

const useGetStandardExamBasedOnCreateExam = (page: number, limit: number, createExamId: string) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Create-Exam"],
    async () => {
      return await StandardService.standardControllerFindStandardExamsBasedOnCreateExam(
        page,
        limit,
        createExamId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetStandardExamBasedOnCreateExam;
