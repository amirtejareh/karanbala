import React from "react";
import { useQuery } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useGetComprehensiveTestBasedOnChapters = (book: string[]) => {
  return useQuery(
    ["Get-All-Comprehensive-Test-Based-On-Chapters"],
    async () => {
      return await ComprehensiveTestService.comprehensiveTestControllerFindComprehensiveTestBasedOnChapters(
        book,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetComprehensiveTestBasedOnChapters;
