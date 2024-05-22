import React from "react";
import { useQuery } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useGetComprehensiveTests = () => {
  return useQuery(
    ["Get-All-Comprehensive-Tests"],
    async () => {
      return await ComprehensiveTestService.comprehensiveTestControllerFindAll();
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetComprehensiveTests;
