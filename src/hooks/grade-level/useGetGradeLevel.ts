import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const useGetGradeLevel = () => {
    return useQuery(["Get-All-Grade-Level"], async () => {
        return await DefaultService.gradeLevelControllerFindAll();
    });
};

export default useGetGradeLevel;
