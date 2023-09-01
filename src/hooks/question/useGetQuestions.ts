import React from "react";
import { useQuery } from "react-query";
import { GradeLevelService, QuestionService } from "../../services";

const useGetQuestions = (page: number, limit: number, objectiveTestId: string) => {
    return useQuery(
        ["Get-All-Questions"],
        async () => {
            return await QuestionService.questionControllerFindAll(page, limit, objectiveTestId);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetQuestions;
