import React from "react";
import { useMutation } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useCreateComprehensiveTest = () => {
  return useMutation((request: any) => {
    return ComprehensiveTestService.comprehensiveTestControllerCreate({ ...request });
  });
};

export default useCreateComprehensiveTest;
