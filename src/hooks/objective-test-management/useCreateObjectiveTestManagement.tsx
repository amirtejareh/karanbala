import React from "react";
import { useMutation } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useCreateObjectiveTestManagement = () => {
    return useMutation((request: any) => {
        return ObjectiveTestManagementService.objectiveTestManagementControllerCreate({
            ...request,
        });
    });
};

export default useCreateObjectiveTestManagement;
