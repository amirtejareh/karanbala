import React from "react";
import { useMutation } from "react-query";
import { ProvinceService } from "../../services";

const useUpdateCity = () => {
  return useMutation((request: any) => {
    return ProvinceService.provinceControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateCity;
