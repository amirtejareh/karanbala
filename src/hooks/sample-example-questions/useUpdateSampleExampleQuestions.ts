import React from "react";
import { useMutation } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useUpdateSampleExampleQuestions = () => {
    return useMutation((request: any) => {
        return SampleExampleQuestionsService.sampleExampleQuestionsControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateSampleExampleQuestions;
