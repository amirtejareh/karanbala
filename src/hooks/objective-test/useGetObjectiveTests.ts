import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestService } from "../../services";

const useGetObjectiveTests = () => {
    return useQuery(
        ["Get-All-Objective-Tests"],
        async () => {
            return await ObjectiveTestService.objectiveTestControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetObjectiveTests;
