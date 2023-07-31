import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useUpdateGradeLevel = () => {
    return useMutation((request: any) => {
        return DefaultService.gradeLevelControllerUpdate(request.id, {
            ...request,
            image: request.image[0],
        });
    });
};

export default useUpdateGradeLevel;
