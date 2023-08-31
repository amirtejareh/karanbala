import React from "react";
import { useQuery } from "react-query";
import { QuestionService } from "../../services";

const useGetBookReferencesBasedOnObjectiveTestId = (id: string) => {
    return useQuery(
        ["Get-All-Book-References-Based-On-Objective-Test-Id"],
        async () => {
            return await QuestionService.questionControllerFindBookReferencesBasedOnObjectiveTests(
                id
            );
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetBookReferencesBasedOnObjectiveTestId;
