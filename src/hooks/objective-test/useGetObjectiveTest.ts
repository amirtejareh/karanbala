import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestService } from "../../services";

const useGetObjectiveTest = (id: string) => {
    return useQuery(
        ["Get-One-Objective-Test"],
        async () => {
            return await ObjectiveTestService.objectiveTestControllerFindOne(id);
        },
        { refetchOnWindowFocus: false, enabled: false, keepPreviousData: false, cacheTime: 0 }
    );
};

export default useGetObjectiveTest;
