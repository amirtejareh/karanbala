import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const useGetGradeLevels = () => {
    return useQuery(
        ["Get-All-Grade-Levels"],
        async () => {
            return await DefaultService.gradeLevelControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetGradeLevels;
