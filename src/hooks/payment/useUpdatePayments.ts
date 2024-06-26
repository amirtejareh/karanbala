import React from "react";
import { useMutation } from "react-query";
import { PaymentService } from "../../services";

const useUpdatePayments = () => {
  return useMutation((request: any) => {
    return PaymentService.paymentControllerUpdate(request.id, { ...request });
  });
};

export default useUpdatePayments;
