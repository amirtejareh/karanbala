import React from "react";
import { useMutation } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useCreateSampleExampleQuestions = () => {
    return useMutation((request: any) => {
        return SampleExampleQuestionsService.sampleExampleQuestionsControllerCreate({ ...request });
    });
};

export default useCreateSampleExampleQuestions;
