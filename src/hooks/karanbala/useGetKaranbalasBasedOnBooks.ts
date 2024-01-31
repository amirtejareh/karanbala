import React from "react";
import { useQuery } from "react-query";
import { KaranbalaService, LearningMaterialService } from "../../services";

const useGetKaranbalaBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Karanbala-Based-On-Book"],
        async () => {
            return await KaranbalaService.karanbalaControllerFindKaranbalaBasedOnBooks(book);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetKaranbalaBasedOnBooks;
