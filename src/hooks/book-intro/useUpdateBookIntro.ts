import React from "react";
import { useMutation } from "react-query";
import { AttachService } from "../../services";

const useUpdateAttach = () => {
    return useMutation((request: any) => {
        return AttachService.attachControllerUpdate(request.id, {
            ...request,
        });
    });
};

export default useUpdateAttach;
