import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExam = () => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam"],
    async () => {
      return await CreateExamService.createExamControllerFindAllCreateExamsBasedOnStandardExam();
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExam;
