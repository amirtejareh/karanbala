import React from "react";
import { useQuery } from "react-query";
import { BookService } from "../../services";

const useGetBooksBasedOnGradeLevels = (gradeLevelIds: string[]) => {
    return useQuery(
        ["Get-All-Books-Based-On-Grade-Levels"],
        async () => {
            return await BookService.bookControllerFindBooksBasedOnGradeLevels(gradeLevelIds);
        },
        { refetchOnWindowFocus: false },
    );
};

export default useGetBooksBasedOnGradeLevels;
