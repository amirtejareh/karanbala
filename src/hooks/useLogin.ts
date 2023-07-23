import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../services";

const useLogin = () => {
    return useMutation((request: any) => {
        return DefaultService.authControllerSinginUser({ ...request });
    });
};

export default useLogin;
