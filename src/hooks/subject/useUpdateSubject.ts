import React from "react";
import { useMutation } from "react-query";
import { SubjectService } from "../../services";

const useUpdateSubject = () => {
    return useMutation((request: any) => {
        return SubjectService.subjectControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateSubject;
