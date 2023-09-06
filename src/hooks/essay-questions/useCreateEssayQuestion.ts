import React from "react";
import { useMutation } from "react-query";
import { EssayQuestionService } from "../../services";

const useCreateEssayQuestion = () => {
    return useMutation((request: any) => {
        return EssayQuestionService.essayQuestionControllerCreate({ ...request });
    });
};

export default useCreateEssayQuestion;
