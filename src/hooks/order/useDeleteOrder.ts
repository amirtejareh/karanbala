import React from "react";
import { useMutation } from "react-query";
import { OrderService } from "../../services";

const useDeletePayment = () => {
  return useMutation((request: string) => {
    return OrderService.orderControllerRemove(request);
  });
};

export default useDeletePayment;
