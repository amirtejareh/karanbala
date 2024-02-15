import React from "react";
import { useQuery } from "react-query";
import { SampleTestQuestionsService } from "../../services";

const useGetSampleTestQuestionsBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Sample-Test-Questions-Based-On-Book"],
        async () => {
            return await SampleTestQuestionsService.sampleTestQuestionsControllerFindSampleTestQuestionsBasedOnBooks(
                book,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetSampleTestQuestionsBasedOnBooks;
