import React from "react";
import { useMutation } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useUpdateObjectiveTestManagement = () => {
    return useMutation((request: any) => {
        return ObjectiveTestManagementService.objectiveTestManagementControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateObjectiveTestManagement;
