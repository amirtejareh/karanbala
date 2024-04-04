import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType = (
  page: number,
  limit: number,
  subjectId: string,
  examLevel: string,
  examType: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Subjective-Exam-Subject-Exam-Level-And-Exam-Type"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateSubjectiveExamsBasedOnSubjectsExamLevelAndExamType(
        page,
        limit,
        subjectId,
        examLevel,
        examType,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnSubjectiveExamSubjectsExamLevelAndExamType;
