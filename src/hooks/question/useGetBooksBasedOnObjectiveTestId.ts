import React from "react";
import { useQuery } from "react-query";
import { QuestionService } from "../../services";

const useGetBooksBasedOnObjectiveTestId = (id: string) => {
    return useQuery(
        ["Get-All-Books-Based-On-Objective-Test-Id"],
        async () => {
            return await QuestionService.questionControllerFindBooksBasedOnObjectiveTests(id);
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetBooksBasedOnObjectiveTestId;
