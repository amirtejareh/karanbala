import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExamAndChapters = (
  page: number,
  limit: number,
  termId: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam-And-Term"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateStandardExamsBasedOnTerms(
        page,
        limit,
        termId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExamAndChapters;
