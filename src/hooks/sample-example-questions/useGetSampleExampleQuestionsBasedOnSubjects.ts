import React from "react";
import { useQuery } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useGetSampleExampleQuestionsBasedOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Learning-Material-Based-On-Subject"],
        async () => {
            return await SampleExampleQuestionsService.sampleExampleQuestionsControllerFindSampleExampleQuestionsBasedOnBooks(
                subject,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetSampleExampleQuestionsBasedOnSubjects;
