import React from "react";
import { useQuery } from "react-query";
import { SampleTestQuestionsService } from "../../services";

const useGetSampleTestQuestionsBasedOnChapters = (chapter: string[]) => {
    return useQuery(
        ["Get-All-Sample-Test-Questions-Based-On-Chapter"],
        async () => {
            return await SampleTestQuestionsService.sampleTestQuestionsControllerFindAttachBasedOnChapter(
                chapter,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetSampleTestQuestionsBasedOnChapters;
