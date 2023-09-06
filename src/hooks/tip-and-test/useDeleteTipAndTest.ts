import React from "react";
import { useMutation } from "react-query";
import { TipAndTestService } from "../../services";

const useDeleteTipAndTest = () => {
    return useMutation((request: string) => {
        return TipAndTestService.tipAndTestControllerRemove(request);
    });
};

export default useDeleteTipAndTest;
