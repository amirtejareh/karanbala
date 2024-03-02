import React from "react";
import { useMutation } from "react-query";
import { StandardService } from "../../services";

const useCreateStandardExam = () => {
  return useMutation((request: any) => {
    return StandardService.standardControllerCreate({ ...request });
  });
};

export default useCreateStandardExam;
