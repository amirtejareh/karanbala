import React from "react";
import { useMutation, useQuery } from "react-query";
import { AuthService } from "../services";

const useLogin = () => {
    return useMutation((request: any) => {
        return AuthService.authControllerSinginUser({ ...request });
    });
};

export default useLogin;
