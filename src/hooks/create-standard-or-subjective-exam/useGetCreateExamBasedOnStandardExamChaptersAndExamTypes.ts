import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnStandardExamChaptersAndExamTypes = (
  page: number,
  limit: number,
  chapterId: string,
  examType: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Standard-Exam-Chapter-And-Exam-Type"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateStandardExamsBasedOnChaptersAndExamTypes(
        page,
        limit,
        chapterId,
        examType,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnStandardExamChaptersAndExamTypes;
