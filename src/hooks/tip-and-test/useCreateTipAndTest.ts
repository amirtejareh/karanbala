import React from "react";
import { useMutation } from "react-query";
import { TipAndTestService } from "../../services";

const useCreateTipAndTest = () => {
    return useMutation((request: any) => {
        return TipAndTestService.tipAndTestControllerCreate({ ...request });
    });
};

export default useCreateTipAndTest;
