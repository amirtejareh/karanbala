import React from "react";
import { useMutation } from "react-query";
import { GradeLevelService } from "../../services";

const useCreateGradeLevel = () => {
    return useMutation((request: any) => {
        return GradeLevelService.gradeLevelControllerCreate({ ...request });
    });
};

export default useCreateGradeLevel;
