import React from "react";
import { useMutation } from "react-query";
import { ComprehensiveTestService } from "../../services";

const useUpdateComprehensiveTest = () => {
  return useMutation((request: any) => {
    return ComprehensiveTestService.comprehensiveTestControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateComprehensiveTest;
