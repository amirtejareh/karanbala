import React from "react";
import { useMutation } from "react-query";
import { GradeLevelService } from "../../services";

const useUpdateGradeLevel = () => {
    return useMutation((request: any) => {
        return GradeLevelService.gradeLevelControllerUpdate(request.id, {
            ...request,
            image: request.image[0],
        });
    });
};

export default useUpdateGradeLevel;
