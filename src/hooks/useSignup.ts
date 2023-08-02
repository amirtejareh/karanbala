import React from "react";
import { useMutation } from "react-query";
import { AuthService } from "../services";

const useSginup = () => {
    return useMutation((request: any) => {
        return AuthService.authControllerCreateUser({ ...request });
    });
};

export default useSginup;
