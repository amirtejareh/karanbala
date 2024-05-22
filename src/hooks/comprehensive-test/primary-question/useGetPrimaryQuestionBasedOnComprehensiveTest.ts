import React from "react";
import { useQuery } from "react-query";
import { PrimaryQuestionService } from "../../../services";

const useGetPrimaryQuestionBasedOnComprehensiveTest = (comprehensiveTestId: string[]) => {
  return useQuery(
    ["Get-All-Learning-Material-Based-On-Season"],
    async () => {
      return await PrimaryQuestionService.primaryQuestionControllerFindPrimaryTestsBasedOnComprehensiveTestId(
        comprehensiveTestId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetPrimaryQuestionBasedOnComprehensiveTest;
