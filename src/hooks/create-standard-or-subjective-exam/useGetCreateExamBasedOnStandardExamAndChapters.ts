import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExamAndChapters = (
  page: number,
  limit: number,
  chapterId: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam-And-Chapter"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateStandardExamsBasedOnChapters(
        page,
        limit,
        chapterId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExamAndChapters;
