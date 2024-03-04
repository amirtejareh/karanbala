import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExam = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam"],
    async () => {
      return await CreateExamService.createExamControllerFindAllCreateExamsBasedOnStandardExam(
        page,
        limit,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExam;
