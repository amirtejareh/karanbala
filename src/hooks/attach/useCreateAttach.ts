import React from "react";
import { useMutation } from "react-query";
import { AttachService } from "../../services";

const useCreateAttach = () => {
    return useMutation((request: any) => {
        return AttachService.attachControllerCreate({ ...request });
    });
};

export default useCreateAttach;
