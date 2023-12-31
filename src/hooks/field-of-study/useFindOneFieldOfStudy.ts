import React from "react";
import { useQuery } from "react-query";
import { FieldOfStudyService } from "../../services";

const useFindOneFieldOfStudy = (request: string) => {
    return useQuery(
        ["Get-One-Field-Of-Studies"],
        async () => {
            return await FieldOfStudyService.fieldOfStudyControllerFindOne(request);
        },
        {
            refetchOnWindowFocus: false,
            keepPreviousData: false,
            enabled: false,
            retry: 0,
            refetchOnMount: false,
        }
    );
};

export default useFindOneFieldOfStudy;
