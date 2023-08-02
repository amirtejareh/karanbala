import React from "react";
import { useQuery } from "react-query";
import { GradeLevelService } from "../../services";

const useGetGradeLevels = () => {
    return useQuery(
        ["Get-All-Grade-Levels"],
        async () => {
            return await GradeLevelService.gradeLevelControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetGradeLevels;
