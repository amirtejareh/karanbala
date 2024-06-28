import React from "react";
import { useQuery } from "react-query";
import { PaymentService } from "../../services";

const useGetPaymentsStatus = (authority: string) => {
  return useQuery(
    ["Get-All-Payments"],
    async () => {
      return await PaymentService.paymentControllerGetPaymentStatus(authority);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!authority,
      retry: 1,
    },
  );
};

export default useGetPaymentsStatus;
