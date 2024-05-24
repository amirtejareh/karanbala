import React from "react";
import { useQuery } from "react-query";
import { PrimaryQuestionService } from "../../../services";

const useGetPrimaryQuestionBasedOnComprehensiveTest = (
  page: number,
  limit: number,
  comprehensiveTestId: string[],
) => {
  return useQuery(
    ["Get-Primary-Questions-Based-On-Comprehensive-Test"],
    async () => {
      return await PrimaryQuestionService.primaryQuestionControllerFindPrimaryTestsBasedOnComprehensiveTestId(
        page,
        limit,
        comprehensiveTestId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetPrimaryQuestionBasedOnComprehensiveTest;
