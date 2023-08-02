import React from "react";
import { useMutation } from "react-query";
import { FieldOfStudyService } from "../../services";

const useCreateFieldOfStudy = () => {
    return useMutation((request: any) => {
        return FieldOfStudyService.fieldOfStudyControllerCreate({ ...request });
    });
};

export default useCreateFieldOfStudy;
