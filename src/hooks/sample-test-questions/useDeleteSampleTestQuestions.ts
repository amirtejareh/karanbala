import React from "react";
import { useMutation } from "react-query";
import { SampleTestQuestionsService } from "../../services";

const useDeleteSampleTestQuestions = () => {
    return useMutation((request: string) => {
        return SampleTestQuestionsService.sampleTestQuestionsControllerRemove(request);
    });
};

export default useDeleteSampleTestQuestions;
