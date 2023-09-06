import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestService } from "../../services";

const useGetObjectiveTestsBasedOnGradeLevel = (page: number, limit: number, number: string[]) => {
    return useQuery(
        ["Get-All-Objective-Tests-Based-On-GradeLevels"],
        async () => {
            return await ObjectiveTestService.objectiveTestControllerFindObjectiveTestsBasedOnGradeLevels(
                page,
                limit,
                number,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetObjectiveTestsBasedOnGradeLevel;
