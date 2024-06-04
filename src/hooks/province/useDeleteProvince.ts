import React from "react";
import { useMutation } from "react-query";
import { ProvinceService } from "../../services";

const useDeleteProvince = () => {
  return useMutation((request: string) => {
    return ProvinceService.provinceControllerRemove(request);
  });
};

export default useDeleteProvince;
