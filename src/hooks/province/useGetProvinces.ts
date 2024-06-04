import React from "react";
import { useQuery } from "react-query";
import { ProvinceService } from "../../services";

const useGetProvinces = () => {
  return useQuery(["Get-All-Provinces"], async () => {
    return await ProvinceService.provinceControllerFindAll();
  });
};

export default useGetProvinces;
