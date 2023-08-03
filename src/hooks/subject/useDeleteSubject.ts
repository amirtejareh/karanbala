import React from "react";
import { useMutation } from "react-query";
import { SubjectService } from "../../services";

const useDeleteSubject = () => {
    return useMutation((request: string) => {
        return SubjectService.subjectControllerRemove(request);
    });
};

export default useDeleteSubject;
