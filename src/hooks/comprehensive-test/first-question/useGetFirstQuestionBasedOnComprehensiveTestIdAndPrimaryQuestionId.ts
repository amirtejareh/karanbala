import React from "react";
import { useQuery } from "react-query";
import { FirstQuestionService } from "../../../services";

const useGetFirstQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId = (
  primaryQuestionlId: string,
  comprehensiveTestId: string,
) => {
  return useQuery(
    ["Get-First-Question-Based-On-Comprehensive-Test-Id-And-Primary-Question-Id"],
    async () => {
      return await FirstQuestionService.firstQuestionControllerFindFirstQuestionBasedOnPrimaryQuestionIdAndComprehensiveTestId(
        primaryQuestionlId,
        comprehensiveTestId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetFirstQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId;
