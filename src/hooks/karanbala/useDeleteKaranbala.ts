import React from "react";
import { useMutation } from "react-query";
import { KaranbalaService } from "../../services";

const useDeleteKaranbala = () => {
    return useMutation((request: string) => {
        return KaranbalaService.karanbalaControllerRemove(request);
    });
};

export default useDeleteKaranbala;
