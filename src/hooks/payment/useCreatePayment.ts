import React from "react";
import { useMutation } from "react-query";
import { PaymentService } from "../../services";

const useCreatePayment = () => {
  return useMutation((request: any) => {
    return PaymentService.paymentControllerCreate(request);
  });
};

export default useCreatePayment;
