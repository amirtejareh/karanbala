import React from "react";
import { useMutation } from "react-query";
import { StandardService } from "../../services";

const useUpdateStandardExam = () => {
  return useMutation((request: any) => {
    return StandardService.standardControllerUpdate(request.id, {
      ...request,
    });
  });
};

export default useUpdateStandardExam;
