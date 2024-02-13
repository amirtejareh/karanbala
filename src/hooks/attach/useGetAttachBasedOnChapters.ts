import React from "react";
import { useQuery } from "react-query";
import { AttachService } from "../../services";

const useGetAttachBasedOnChapters = (chapter: string[]) => {
    return useQuery(
        ["Get-All-Attach-Based-On-Chapter"],
        async () => {
            return await AttachService.attachControllerFindAttachBasedOnChapter(chapter);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetAttachBasedOnChapters;
