import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useUpdateGradeLevel = () => {
    return useMutation((request: any) => {
        return DefaultService.gradeLevelControllerUpdate(request.id, { title: request.title });
    });
};

export default useUpdateGradeLevel;
