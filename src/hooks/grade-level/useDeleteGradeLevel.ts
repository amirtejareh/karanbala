import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useDeleteGradeLevel = () => {
    return useMutation((request: string) => {
        return DefaultService.gradeLevelControllerRemove(request);
    });
};

export default useDeleteGradeLevel;
