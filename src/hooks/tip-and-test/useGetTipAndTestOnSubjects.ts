import React from "react";
import { useQuery } from "react-query";
import { TipAndTestService } from "../../services";

const useGetTipAndTestOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Tip-And-Test-Based-On-Subject"],
        async () => {
            return await TipAndTestService.tipAndTestControllerFindTipAndTestBasedOnSubject(subject);
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetTipAndTestOnSubjects;
