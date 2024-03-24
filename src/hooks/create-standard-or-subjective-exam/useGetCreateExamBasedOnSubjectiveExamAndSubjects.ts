import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExamBasedOnSubjectiveExamAndSubjects = (
  page: number,
  limit: number,
  subjectId: string,
) => {
  return useQuery(
    ["Get-All-Create-Exam-Based-On-Subjective-Exam-And-Subject"],
    async () => {
      return await CreateExamService.createExamControllerFindCreateSubjectiveExamsBasedOnSubjects(
        page,
        limit,
        subjectId,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExamBasedOnSubjectiveExamAndSubjects;
