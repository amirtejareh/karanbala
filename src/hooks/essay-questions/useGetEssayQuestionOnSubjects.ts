import React from "react";
import { useQuery } from "react-query";
import { EssayQuestionService } from "../../services";

const useGetEssayQuestionOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Essay-Question-Based-On-Subject"],
        async () => {
            return await EssayQuestionService.essayQuestionControllerFindEssayQuestionBasedOnSubject(subject);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetEssayQuestionOnSubjects;
