import React from "react";
import { useQuery } from "react-query";
import { CityService } from "../../services";

const useGetCitiesBasedOnProvinceId = (provinceId: string) => {
  return useQuery(
    ["Get-All-Cities-Based-On-Province-Id"],
    async () => {
      return await CityService.cityControllerFindCitiesBasedOnProvince([provinceId]);
    },
    {
      enabled: false,
    },
  );
};

export default useGetCitiesBasedOnProvinceId;
