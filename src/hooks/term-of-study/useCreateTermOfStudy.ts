import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useCreateTermOfStudy = () => {
    return useMutation((request: any) => {
        return DefaultService.termOfStudyControllerCreate({ ...request });
    });
};

export default useCreateTermOfStudy;
