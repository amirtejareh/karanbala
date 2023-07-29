import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useUpdateTermOfStudy = () => {
    return useMutation((request: any) => {
        return DefaultService.termOfStudyControllerUpdate(request.id, { title: request.title });
    });
};

export default useUpdateTermOfStudy;
