import React from "react";
import { useMutation } from "react-query";
import { CityService } from "../../services";

const useUpdateCity = () => {
  return useMutation((request: any) => {
    return CityService.cityControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateCity;
