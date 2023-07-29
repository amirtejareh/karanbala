import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useDeleteTermOfStudy = () => {
    return useMutation((request: string) => {
        return DefaultService.termOfStudyControllerRemove(request);
    });
};

export default useDeleteTermOfStudy;
