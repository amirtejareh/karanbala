import React from "react";
import { useMutation } from "react-query";
import { CityService } from "../../services";

const useCreateCity = () => {
  return useMutation((request: any) => {
    return CityService.cityControllerCreate({ ...request });
  });
};

export default useCreateCity;
