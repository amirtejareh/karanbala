import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useCreateGradeLevel = () => {
    return useMutation((request: any) => {
        return DefaultService.gradeLevelControllerCreate({ ...request });
    });
};

export default useCreateGradeLevel;
