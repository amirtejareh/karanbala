import React from "react";
import { useQuery } from "react-query";
import { CityService } from "../../services";

const useGetCities = () => {
  return useQuery(["Get-All-Cities"], async () => {
    return await CityService.cityControllerFindAll();
  });
};

export default useGetCities;
