import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const useGetFieldOfStudies = () => {
    return useQuery(["Get-All-Field-Of-Studies"], async () => {
        return await DefaultService.fieldOfStudyControllerFindAll();
    });
};

export default useGetFieldOfStudies;
