import React from "react";
import { useMutation, useQuery } from "react-query";
import { QuestionService } from "../../services";

const useUpdateQuestion = () => {
    return useMutation((request: any) => {
        return QuestionService.questionControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateQuestion;
