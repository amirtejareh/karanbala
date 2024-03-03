import { useQuery } from "react-query";
import { CreateExamService } from "../../services";

const useGetCreateExam = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-Sample-Test-Questions-Based-On-Book"],
    async () => {
      return await CreateExamService.createExamControllerFindAll(page, limit);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetCreateExam;
