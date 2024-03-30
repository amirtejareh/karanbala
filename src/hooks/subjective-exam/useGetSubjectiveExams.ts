import React from "react";
import { useQuery } from "react-query";
import { SubjectiveService } from "../../services";

const useGetSubjectiveExams = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-Subjective-Exam"],
    async () => {
      return await SubjectiveService.subjectiveControllerFindAll(page, limit);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetSubjectiveExams;
