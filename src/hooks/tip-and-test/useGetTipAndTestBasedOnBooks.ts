import React from "react";
import { useQuery } from "react-query";
import { EssayQuestionService, TipAndTestService } from "../../services";

const useGetTipAndTestBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Tip-And-Test-Based-On-Book"],
        async () => {
            return await TipAndTestService.tipAndTestControllerFindTipAndTestBasedOnBooks(book);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetTipAndTestBasedOnBooks;
