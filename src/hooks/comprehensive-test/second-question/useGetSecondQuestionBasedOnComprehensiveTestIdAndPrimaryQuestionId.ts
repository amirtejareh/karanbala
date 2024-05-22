import React from "react";
import { useQuery } from "react-query";
import { SecondQuestionService } from "../../../services";

const useGetSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId = (
  primaryQuestionlId: string,
  comprehensiveTestId: string,
) => {
  return useQuery(
    ["Get-Second-Question-Based-On-Comprehensive-Test-Id-And-Primary-Question-Id"],
    async () => {
      return await SecondQuestionService.secondQuestionControllerFindSecondQuestionBasedOnPrimaryQuestionIdAndComprehensiveTestId(
        primaryQuestionlId,
        comprehensiveTestId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId;
