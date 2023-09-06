import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useGetObjectiveTestManagements = (page: number, limit: number) => {
    return useQuery(
        ["Get-All-Objective-Test-Managements"],
        async () => {
            return await ObjectiveTestManagementService.objectiveTestManagementControllerFindAll(
                page,
                limit,
            );
        },
        { refetchOnWindowFocus: false },
    );
};

export default useGetObjectiveTestManagements;
