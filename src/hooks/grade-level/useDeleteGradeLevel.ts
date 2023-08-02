import React from "react";
import { useMutation } from "react-query";
import { GradeLevelService } from "../../services";

const useDeleteGradeLevel = () => {
    return useMutation((request: string) => {
        return GradeLevelService.gradeLevelControllerRemove(request);
    });
};

export default useDeleteGradeLevel;
