import React from "react";
import { useMutation } from "react-query";
import { BookService } from "../../services";

const useCreateBook = () => {
    return useMutation((request: any) => {
        return BookService.bookControllerCreate({ ...request });
    });
};

export default useCreateBook;
