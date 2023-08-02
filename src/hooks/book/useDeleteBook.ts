import React from "react";
import { useMutation } from "react-query";
import { BookService } from "../../services";

const useDeleteBook = () => {
    return useMutation((request: string) => {
        return BookService.bookControllerRemove(request);
    });
};

export default useDeleteBook;
