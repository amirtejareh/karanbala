import React from "react";
import { useMutation } from "react-query";
import { KaranbalaService } from "../../services";

const useUpdateKaranbala = () => {
    return useMutation((request: any) => {
        return KaranbalaService.karanbalaControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateKaranbala;
