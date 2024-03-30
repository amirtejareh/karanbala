import React from "react";
import { useQuery } from "react-query";
import { SubjectiveService } from "../../services";

const useGetSubjectiveExamBasedOnBooks = (page: number, limit: number, book: string) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Book"],
    async () => {
      return await SubjectiveService.subjectiveControllerFindSubjectivesBasedOnBooks(
        page,
        limit,
        book,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetSubjectiveExamBasedOnBooks;
