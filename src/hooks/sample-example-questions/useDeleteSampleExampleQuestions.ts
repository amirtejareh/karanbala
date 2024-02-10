import React from "react";
import { useMutation } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useDeleteSampleExampleQuestions = () => {
    return useMutation((request: string) => {
        return SampleExampleQuestionsService.sampleExampleQuestionsControllerRemove(request);
    });
};

export default useDeleteSampleExampleQuestions;
