import React from "react";
import { useQuery } from "react-query";
import { GradeLevelService, QuestionService } from "../../services";

const useGetQuestions = (page: number, limit: number) => {
    return useQuery(
        ["Get-All-Questions"],
        async () => {
            return await QuestionService.questionControllerFindAll(page, limit);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetQuestions;
