import React from "react";
import { useQuery } from "react-query";
import { BookIntroService } from "../../services";

const useGetBookIntroBasedOnBooksAndType = (book: string[], type: string) => {
    return useQuery(
        ["Get-All-Book-Intro-Based-On-Books-And-Type"],
        async () => {
            return await BookIntroService.bookIntroControllerFindBookIntroBasedOnBooksAndType(
                book,
                type,
            );
        },
        { refetchOnWindowFocus: false },
    );
};

export default useGetBookIntroBasedOnBooksAndType;
