import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useDeleteBook = () => {
    return useMutation((request: string) => {
        return DefaultService.bookControllerRemove(request);
    });
};

export default useDeleteBook;
