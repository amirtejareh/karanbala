import React from "react";
import { useMutation } from "react-query";
import { OrderService } from "../../services";

const useCreatePayment = () => {
  return useMutation((request: any) => {
    return OrderService.orderControllerCreate(request);
  });
};

export default useCreatePayment;
