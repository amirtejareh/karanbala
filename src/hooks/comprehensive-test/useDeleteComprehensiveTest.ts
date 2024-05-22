import React from "react";
import { useMutation } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useDeleteComprehensiveTest = () => {
  return useMutation((request: string) => {
    return ComprehensiveTestService.comprehensiveTestControllerRemove(request);
  });
};

export default useDeleteComprehensiveTest;
