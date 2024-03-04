import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnSubjectiveExam = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Subjective-Exam"],
    async () => {
      return await CreateExamService.createExamControllerFindAllCreateExamsBasedOnSubjectiveExam(
        page,
        limit,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnSubjectiveExam;
