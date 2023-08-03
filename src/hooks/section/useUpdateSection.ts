import React from "react";
import { useMutation } from "react-query";
import { ChapterService, SectionService } from "../../services";

const useUpdateChapter = () => {
    return useMutation((request: any) => {
        return SectionService.sectionControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateChapter;
