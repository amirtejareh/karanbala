import React from "react";
import { useMutation } from "react-query";
import { EssayQuestionService } from "../../services";

const useDeleteEssayQuestion = () => {
    return useMutation((request: string) => {
        return EssayQuestionService.essayQuestionControllerRemove(request);
    });
};

export default useDeleteEssayQuestion;
