import React from "react";
import { useQuery } from "react-query";
import { SampleTestQuestionsService, StandardService } from "../../services";

const useGetStandardExamBasedOnBooks = (page: number, limit: number, book: string) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Book"],
    async () => {
      return await StandardService.standardControllerFindStandardsBasedOnBooks(page, limit, book);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetStandardExamBasedOnBooks;
