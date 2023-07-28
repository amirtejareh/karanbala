import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useDeleteFieldOfStudy = () => {
    return useMutation((request: string) => {
        return DefaultService.fieldOfStudyControllerRemove(request);
    });
};

export default useDeleteFieldOfStudy;
