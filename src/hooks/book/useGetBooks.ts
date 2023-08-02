import React from "react";
import { useQuery } from "react-query";
import { BookService } from "../../services";

const useGetBooks = () => {
    return useQuery(
        ["Get-All-Books"],
        async () => {
            return await BookService.bookControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetBooks;
