import React from "react";
import { useMutation } from "react-query";
import { ContentEducationalPricingService } from "../../../services";

const useCreateContentEducationalPricing = () => {
  return useMutation((request: any) => {
    return ContentEducationalPricingService.contentEducationalPricingControllerCreate({
      ...request,
    });
  });
};

export default useCreateContentEducationalPricing;
