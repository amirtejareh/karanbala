import React from "react";
import { useQuery } from "react-query";
import { ChapterService } from "../../services";

const useGetChapters = () => {
    return useQuery(["Get-All-Chapters"], async () => {
        return await ChapterService.chapterControllerFindAll();
    });
};

export default useGetChapters;
