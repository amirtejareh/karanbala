import React from "react";
import { useQuery } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useGetComprehensiveTestBasedOnChapters = (book: string[]) => {
  return useQuery(
    ["Get-All-Learning-Material-Based-On-Season"],
    async () => {
      return await ComprehensiveTestService.comprehensiveTestControllerFindComprehensiveTestBasedOnChapters(
        book,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetComprehensiveTestBasedOnChapters;
