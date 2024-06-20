import React from "react";
import { useQuery } from "react-query";
import { OrderService } from "../../services";

const useGetPayments = () => {
  return useQuery(["Get-All-Payments"], async () => {
    return await OrderService.orderControllerFindAll();
  });
};

export default useGetPayments;
