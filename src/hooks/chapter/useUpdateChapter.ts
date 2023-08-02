import React from "react";
import { useMutation, useQuery } from "react-query";
import { ChapterService } from "../../services";

const useUpdateChapter = () => {
    return useMutation((request: any) => {
        return ChapterService.chapterControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateChapter;
