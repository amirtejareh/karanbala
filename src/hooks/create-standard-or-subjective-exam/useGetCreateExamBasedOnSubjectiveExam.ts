import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnSubjectiveExam = () => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Subjective-Exam"],
    async () => {
      return await CreateExamService.createExamControllerFindAllCreateExamsBasedOnSubjectiveExam();
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnSubjectiveExam;
