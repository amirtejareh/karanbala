import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const useGetTermOfStudies = () => {
    return useQuery(["Get-All-Term-Of-Studies"], async () => {
        return await DefaultService.termOfStudyControllerFindAll();
    });
};

export default useGetTermOfStudies;
