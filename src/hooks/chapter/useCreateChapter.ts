import React from "react";
import { useMutation } from "react-query";
import { ChapterService } from "../../services";

const useCreateChapter = () => {
    return useMutation((request: any) => {
        return ChapterService.chapterControllerCreate({ ...request });
    });
};

export default useCreateChapter;
