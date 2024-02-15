import React from "react";
import { useMutation } from "react-query";
import { SampleTestQuestionsService } from "../../services";

const useCreateSampleTestQuestions = () => {
    return useMutation((request: any) => {
        return SampleTestQuestionsService.sampleTestQuestionsControllerCreate({ ...request });
    });
};

export default useCreateSampleTestQuestions;
