import React from "react";
import { useMutation } from "react-query";
import { CityService } from "../../services";

const useDeleteCity = () => {
  return useMutation((request: string) => {
    return CityService.cityControllerRemove(request);
  });
};

export default useDeleteCity;
