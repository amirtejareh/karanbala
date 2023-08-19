import React from "react";
import { useQuery } from "react-query";

const useGetObjectiveTestManagements = () => {
    return useQuery(
        ["Get-All-Objective-Test-Managements"],
        async () => {
            return await ObjectiveTestManagements.objectiveTestControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetObjectiveTestManagements;
