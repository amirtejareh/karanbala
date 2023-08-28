import React from "react";
import { useQuery } from "react-query";
import { BookReferenceService } from "../../services";

const useGetBookReferencesBasedOnGradeLevels = (gradeLevelIds: string[]) => {
    return useQuery(
        ["Get-All-BookReference-References-Based-On-Grade-Levels"],
        async () => {
            return await BookReferenceService.bookReferenceControllerFindBookReferencesBasedOnGradeLevels(
                gradeLevelIds,
            );
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetBookReferencesBasedOnGradeLevels;
