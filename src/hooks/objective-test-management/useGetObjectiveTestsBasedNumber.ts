import React from "react";
import { useQuery } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useGetObjectiveTestsBasedNumber = (number: string) => {
    return useQuery(
        ["Get-All-Objective-Tests-Based-On-Number"],
        async () => {
            console.log(number);

            return await ObjectiveTestManagementService.objectiveTestManagementControllerGetObjectiveTestsBasedNumber(
                number
            );
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetObjectiveTestsBasedNumber;
