import React from "react";
import { useMutation } from "react-query";
import { ChapterService } from "../../services";

const useDeleteChapter = () => {
    return useMutation((request: string) => {
        return ChapterService.chapterControllerRemove(request);
    });
};

export default useDeleteChapter;
