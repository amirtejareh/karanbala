import React from "react";
import { useMutation, useQuery } from "react-query";
import { QuestionService } from "../../services";

const useCreateQuestion = () => {
    return useMutation((request: any) => {
        return QuestionService.questionControllerCreate({ ...request });
    });
};

export default useCreateQuestion;
