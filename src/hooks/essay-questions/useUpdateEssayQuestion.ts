import React from "react";
import { useMutation } from "react-query";
import { EssayQuestionService } from "../../services";

const useUpdateEssayQuestion = () => {
    return useMutation((request: any) => {
        return EssayQuestionService.essayQuestionControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateEssayQuestion;
