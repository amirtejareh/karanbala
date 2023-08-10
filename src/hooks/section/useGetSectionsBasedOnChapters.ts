import React from "react";
import { useQuery } from "react-query";
import { SectionService } from "../../services";

const useGetSectionsBasedOnChapters = (chapters: string[]) => {
    return useQuery(
        ["Get-All-Sections-Based-On-Chapters"],
        async () => {
            return await SectionService.sectionControllerFindSectionsBasedOnChapters(chapters);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetSectionsBasedOnChapters;
