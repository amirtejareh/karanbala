import React from "react";
import { useMutation } from "react-query";
import { OrderService } from "../../services";

const useUpdateCity = () => {
  return useMutation((request: any) => {
    return OrderService.orderControllerUpdate(request.id, { ...request });
  });
};

export default useUpdateCity;
