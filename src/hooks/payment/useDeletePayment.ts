import React from "react";
import { useMutation } from "react-query";
import { PaymentService } from "../../services";

const useDeletePayment = () => {
  return useMutation((request: string) => {
    return PaymentService.paymentControllerRemove(request);
  });
};

export default useDeletePayment;
