import React from "react";
import { useQuery } from "react-query";
import { SubjectService } from "../../services";

const useGetSubjectsBasedOnSections = (sections: string[]) => {
    return useQuery(
        ["Get-All-Subjects-Based-On-Sections"],
        async () => {
            return await SubjectService.subjectControllerFindSubjectsBasedOnSections(sections);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetSubjectsBasedOnSections;
