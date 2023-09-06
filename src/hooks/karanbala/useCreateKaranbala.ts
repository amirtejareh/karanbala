import React from "react";
import { useMutation } from "react-query";
import { KaranbalaService } from "../../services";

const useCreateKaranbala = () => {
    return useMutation((request: any) => {
        return KaranbalaService.karanbalaControllerCreate({ ...request });
    });
};

export default useCreateKaranbala;
