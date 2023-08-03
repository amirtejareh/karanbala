import React from "react";
import { useQuery } from "react-query";
import { SubjectService } from "../../services";

const useGetSections = () => {
    return useQuery(["Get-All-Sections"], async () => {
        return await SubjectService.subjectControllerFindAll();
    });
};

export default useGetSections;
