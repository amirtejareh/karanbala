import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useGetObjectiveTestManagements = () => {
    return useQuery(
        ["Get-All-Objective-Test-Managements"],
        async () => {
            return await ObjectiveTestManagementService.objectiveTestManagementControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetObjectiveTestManagements;
