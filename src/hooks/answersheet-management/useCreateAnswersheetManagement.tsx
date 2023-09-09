import React from "react";
import { useMutation } from "react-query";
import { AnswersheetManagementService } from "../../services";

const useCreateAnswersheetManagement = () => {
    return useMutation((request: any) => {
        return AnswersheetManagementService.answersheetManagementControllerCreate({
            ...request,
        });
    });
};

export default useCreateAnswersheetManagement;
