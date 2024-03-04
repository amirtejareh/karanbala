import React from "react";
import { useQuery } from "react-query";
import { SampleTestQuestionsService, StandardService } from "../../services";

const useGetStandardExams = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Book"],
    async () => {
      return await StandardService.standardControllerFindAll(page, limit);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetStandardExams;
