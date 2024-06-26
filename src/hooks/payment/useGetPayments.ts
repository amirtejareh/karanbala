import React from "react";
import { useQuery } from "react-query";
import { PaymentService } from "../../services";

const useGetPayments = () => {
  return useQuery(["Get-All-Payments"], async () => {
    return await PaymentService.paymentControllerFindAll();
  });
};

export default useGetPayments;
