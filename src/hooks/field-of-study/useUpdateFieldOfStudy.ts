import React from "react";
import { useMutation, useQuery } from "react-query";
import { FieldOfStudyService } from "../../services";

const useUpdateFieldOfStudy = () => {
    return useMutation((request: any) => {
        return FieldOfStudyService.fieldOfStudyControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateFieldOfStudy;
