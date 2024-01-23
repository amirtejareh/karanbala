import React from "react";
import { useQuery } from "react-query";
import { EssayQuestionService, LearningMaterialService } from "../../services";

const useGetEssayQuestionBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Essay-Question-Based-On-Book"],
        async () => {
            return await EssayQuestionService.essayQuestionControllerFindEssayQuestionBasedOnBooks(
                book,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetEssayQuestionBasedOnBooks;
