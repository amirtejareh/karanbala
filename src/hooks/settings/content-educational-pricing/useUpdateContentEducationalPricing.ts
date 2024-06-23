import React from "react";
import { useMutation } from "react-query";
import { ContentEducationalPricingService } from "../../../services";

const useUpdateContentEducationalPricing = () => {
  return useMutation((request: any) => {
    return ContentEducationalPricingService.contentEducationalPricingControllerUpdate(request.id, {
      ...request,
    });
  });
};

export default useUpdateContentEducationalPricing;
