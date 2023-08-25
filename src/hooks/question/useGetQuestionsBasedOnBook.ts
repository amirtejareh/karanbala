import React from "react";
import { useQuery } from "react-query";
import { QuestionService } from "../../services";

const useGetQuestionsBasedOnBook = (page: number, limit: number, bookId: string) => {
    return useQuery(
        ["Get-All-Questions-Based-On-Book"],
        async () => {
            return await QuestionService.questionControllerFindQuestionsBasedOnBooks(
                page,
                limit,
                bookId
            );
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetQuestionsBasedOnBook;
