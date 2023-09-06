import React from "react";
import { useQuery } from "react-query";
import { QuestionService } from "../../services";

const useGetQuestionsBasedOnBookReferences = (page: number, limit: number, bookId: string) => {
    return useQuery(
        ["Get-All-Questions-Based-On-Book"],
        async () => {
            return await QuestionService.questionControllerFindQuestionsBasedOnBookReferences(
                page,
                limit,
                bookId,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetQuestionsBasedOnBookReferences;
