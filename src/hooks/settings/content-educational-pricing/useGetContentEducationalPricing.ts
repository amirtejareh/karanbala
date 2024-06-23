import React from "react";
import { useQuery } from "react-query";
import { ContentEducationalPricingService } from "../../../services";

const useGetContentEducationalPricing = () => {
  return useQuery(
    ["Get-All-Content-Educational-Pricing"],
    async () => {
      return await ContentEducationalPricingService.contentEducationalPricingControllerFindAll();
    },
    { refetchOnWindowFocus: false },
  );
};

export default useGetContentEducationalPricing;
