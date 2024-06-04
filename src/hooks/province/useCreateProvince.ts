import React from "react";
import { useMutation } from "react-query";
import { ProvinceService } from "../../services";

const useCreateProvince = () => {
  return useMutation((request: any) => {
    return ProvinceService.provinceControllerCreate({ ...request });
  });
};

export default useCreateProvince;
