import React from "react";
import { useMutation } from "react-query";
import { ContentEducationalPricingService } from "../../../services";

const useDeleteContentEducationalPricing = () => {
  return useMutation((request: string) => {
    return ContentEducationalPricingService.contentEducationalPricingControllerRemove(request);
  });
};

export default useDeleteContentEducationalPricing;
