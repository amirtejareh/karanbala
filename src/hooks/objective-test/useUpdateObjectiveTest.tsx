import React from "react";
import { useMutation } from "react-query";
import { ObjectiveTestService } from "../../services";

const useUpdateObjectiveTest = () => {
    return useMutation((request: any) => {
        return ObjectiveTestService.objectiveTestControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateObjectiveTest;
