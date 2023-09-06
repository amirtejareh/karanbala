import React from "react";
import { useQuery } from "react-query";
import { KaranbalaService } from "../../services";

const useGetKaranbalaOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Karanbala-Based-On-Subject"],
        async () => {
            return await KaranbalaService.karanbalaControllerFindKaranbalaBasedOnSubject(subject);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetKaranbalaOnSubjects;
