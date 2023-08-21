import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestService } from "../../services";

const useGetMainObjectiveTests = () => {
    return useQuery(
        ["Get-All-Main-Objective-Tests"],
        async () => {
            return await ObjectiveTestService.objectiveTestControllerFindMainObjectiveTest();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetMainObjectiveTests;
