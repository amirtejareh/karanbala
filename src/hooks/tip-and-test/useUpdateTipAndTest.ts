import React from "react";
import { useMutation } from "react-query";
import { TipAndTestService } from "../../services";

const useUpdateTipAndTest = () => {
    return useMutation((request: any) => {
        return TipAndTestService.tipAndTestControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateTipAndTest;
