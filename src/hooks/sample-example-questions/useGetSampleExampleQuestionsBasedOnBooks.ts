import React from "react";
import { useQuery } from "react-query";
import { SampleExampleQuestionsService } from "../../services";

const useGetSampleExampleQuestionsBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Learning-Material-Based-On-Book"],
        async () => {
            return await SampleExampleQuestionsService.sampleExampleQuestionsControllerFindSampleExampleQuestionsBasedOnBooks(
                book,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetSampleExampleQuestionsBasedOnBooks;
