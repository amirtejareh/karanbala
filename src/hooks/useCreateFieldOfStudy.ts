import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../services";

const useCreateFieldOfStudy = () => {
    return useMutation((request: any) => {
        return DefaultService.fieldOfStudyControllerCreate({ ...request });
    });
};

export default useCreateFieldOfStudy;
