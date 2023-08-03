import React from "react";
import { useQuery } from "react-query";
import { SectionService } from "../../services";

const useGetSections = () => {
    return useQuery(["Get-All-Sections"], async () => {
        return await SectionService.sectionControllerFindAll();
    });
};

export default useGetSections;
