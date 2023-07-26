import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../services";

const useSginup = () => {
    return useMutation((request: any) => {
        return DefaultService.authControllerCreateUser({ ...request });
    });
};

export default useSginup;
