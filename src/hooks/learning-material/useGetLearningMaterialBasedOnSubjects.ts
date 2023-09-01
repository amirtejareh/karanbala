import React from "react";
import { useQuery } from "react-query";
import { LearningMaterialService } from "../../services";

const useGetLearningMaterialBasedOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Learning-Material-Based-On-Subject"],
        async () => {
            return await LearningMaterialService.learningMaterialControllerFindLearningMaterialBasedOnSubject(subject);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetLearningMaterialBasedOnSubjects;
