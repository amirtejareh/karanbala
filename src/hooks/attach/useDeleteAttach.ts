import React from "react";
import { useMutation } from "react-query";
import { AttachService } from "../../services";

const useDeleteAttach = () => {
    return useMutation((request: string) => {
        return AttachService.attachControllerRemove(request);
    });
};

export default useDeleteAttach;
