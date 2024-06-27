import React from "react";
import { useQuery } from "react-query";
import { PaymentService } from "../../services";

const useGetPayments = (page: number, limit: number) => {
  return useQuery(["Get-All-Payments"], async () => {
    return await PaymentService.paymentControllerFindAll(page, limit);
  });
};

export default useGetPayments;
