import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExamTermsAndExamTypes = (
  page: number,
  limit: number,
  termId: string,
  examType: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam-And-Term"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateStandardExamsBasedOnTermsAndExamTypes(
        page,
        limit,
        termId,
        examType,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExamTermsAndExamTypes;
