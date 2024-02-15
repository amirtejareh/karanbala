import React from "react";
import { useMutation } from "react-query";
import { SampleTestQuestionsService } from "../../services";

const useUpdateSampleTestQuestions = () => {
    return useMutation((request: any) => {
        return SampleTestQuestionsService.sampleTestQuestionsControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateSampleTestQuestions;
