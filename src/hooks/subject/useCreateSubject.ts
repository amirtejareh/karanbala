import React from "react";
import { useMutation } from "react-query";
import { SubjectService } from "../../services";

const useCreateSubject = () => {
    return useMutation((request: any) => {
        return SubjectService.subjectControllerCreate({ ...request });
    });
};

export default useCreateSubject;
