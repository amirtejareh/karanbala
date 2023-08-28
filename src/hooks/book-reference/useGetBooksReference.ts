import React from "react";
import { useQuery } from "react-query";
import { BookReferenceService } from "../../services";

const useGetBookReferences = () => {
    return useQuery(
        ["Get-All-BookReference-References"],
        async () => {
            return await BookReferenceService.bookReferenceControllerFindAll();
        },
        { refetchOnWindowFocus: false },
    );
};

export default useGetBookReferences;
