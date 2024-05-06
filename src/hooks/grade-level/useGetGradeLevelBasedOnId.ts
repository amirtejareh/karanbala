import React from "react";
import { useQuery } from "react-query";
import { GradeLevelService } from "../../services";

const useGetGradeLevelBasedOnId = (id: string) => {
  return useQuery(
    ["Get-Grade-Level-Based-On-Id"],
    async () => {
      return await GradeLevelService.gradeLevelControllerFindOne(id);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetGradeLevelBasedOnId;
