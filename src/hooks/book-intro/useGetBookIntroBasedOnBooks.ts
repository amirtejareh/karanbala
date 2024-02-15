import React from "react";
import { useQuery } from "react-query";
import { BookIntroService } from "../../services";

const useGetBookIntroBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Book-Intro-Based-On-Book"],
        async () => {
            return await BookIntroService.bookIntroControllerFindBookIntroBasedOnBooks(book);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetBookIntroBasedOnBooks;
