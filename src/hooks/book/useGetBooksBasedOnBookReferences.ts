import React from "react";
import { useQuery } from "react-query";
import { BookService } from "../../services";

const useGetBooksBasedOnBookReferences = (bookReferences: string[], gradeLevels: string[]) => {
    return useQuery(
        ["Get-All-Books-Based-On-Book-References"],
        async () => {
            return await BookService.bookControllerFindBooksBasedOnBookReferences(
                bookReferences,
                gradeLevels,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetBooksBasedOnBookReferences;
