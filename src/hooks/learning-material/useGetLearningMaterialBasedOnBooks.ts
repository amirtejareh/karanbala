import React from "react";
import { useQuery } from "react-query";
import { LearningMaterialService } from "../../services";

const useGetLearningMaterialBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Learning-Material-Based-On-Book"],
        async () => {
            return await LearningMaterialService.learningMaterialControllerFindLearningMaterialBasedOnBooks(
                book,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetLearningMaterialBasedOnBooks;
