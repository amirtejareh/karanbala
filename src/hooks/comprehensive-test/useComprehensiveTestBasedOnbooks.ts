import React from "react";
import { useQuery } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useGetComprehensiveTestBasedOnBooks = (book: string[]) => {
  return useQuery(
    ["Get-All-Comprehensive-Test-Based-On-Books"],
    async () => {
      return await ComprehensiveTestService.comprehensiveTestControllerFindComprehensiveTestBasedOnBooks(
        book,
      );
    },
    { refetchOnWindowFocus: false, enabled: !!book[0] },
  );
};

export default useGetComprehensiveTestBasedOnBooks;
