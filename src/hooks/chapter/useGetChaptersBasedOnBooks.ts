import React from "react";
import { useQuery } from "react-query";
import { ChapterService } from "../../services";

const useGetChaptersBasedOnBooks = (books: string[]) => {
    return useQuery(
        ["Get-All-Chapters-Based-On-Books"],
        async () => {
            return await ChapterService.chapterControllerFindChaptersBasedOnBooks(books);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetChaptersBasedOnBooks;
