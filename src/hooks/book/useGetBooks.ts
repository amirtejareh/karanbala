import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const useGetBooks = () => {
    return useQuery(["Get-All-Books"], async () => {
        return await DefaultService.bookControllerFindAll();
    });
};

export default useGetBooks;
