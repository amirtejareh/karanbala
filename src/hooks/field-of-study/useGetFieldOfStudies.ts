import React from "react";
import { useQuery } from "react-query";
import { FieldOfStudyService } from "../../services";

const useGetFieldOfStudies = () => {
    return useQuery(
        ["Get-All-Field-Of-Studies"],
        async () => {
            return await FieldOfStudyService.fieldOfStudyControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetFieldOfStudies;
