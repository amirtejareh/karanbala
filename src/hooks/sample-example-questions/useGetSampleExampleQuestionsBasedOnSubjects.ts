import React from "react";
import { useQuery } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useGetSampleExampleQuestionsBasedOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Sample-Example-Questions-Based-On-Subject"],
        async () => {
            return await SampleExampleQuestionsService.sampleExampleQuestionsControllerFindSampleExampleQuestionsBasedOnSubject(
                subject,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetSampleExampleQuestionsBasedOnSubjects;
