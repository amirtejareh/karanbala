import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useCreateBook = () => {
    return useMutation((request: any) => {
        return DefaultService.bookControllerCreate({ ...request });
    });
};

export default useCreateBook;
