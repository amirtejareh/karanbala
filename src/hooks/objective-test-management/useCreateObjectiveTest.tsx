import React from "react";
import { useMutation, useQuery } from "react-query";
import { ObjectiveTestService } from "../../services";

const useCreateObjectiveTest = () => {
    return useMutation((request: any) => {
        return ObjectiveTestService.objectiveTestControllerCreate({ ...request });
    });
};

export default useCreateObjectiveTest;
