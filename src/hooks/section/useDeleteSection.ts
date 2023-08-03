import React from "react";
import { useMutation } from "react-query";
import { SectionService } from "../../services";

const useDeleteSection = () => {
    return useMutation((request: string) => {
        return SectionService.sectionControllerRemove(request);
    });
};

export default useDeleteSection;
