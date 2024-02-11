import React from "react";
import { useQuery } from "react-query";
import { AttachService } from "../../services";

const useGetAttachBasedOnBooks = (book: string[]) => {
    return useQuery(
        ["Get-All-Attach-Based-On-Book"],
        async () => {
            return await AttachService.attachControllerFindAttachBasedOnBooks(book);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetAttachBasedOnBooks;
