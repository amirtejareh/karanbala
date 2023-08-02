import React from "react";
import { useMutation } from "react-query";
import { FieldOfStudyService } from "../../services";

const useDeleteFieldOfStudy = () => {
    return useMutation((request: string) => {
        return FieldOfStudyService.fieldOfStudyControllerRemove(request);
    });
};

export default useDeleteFieldOfStudy;
