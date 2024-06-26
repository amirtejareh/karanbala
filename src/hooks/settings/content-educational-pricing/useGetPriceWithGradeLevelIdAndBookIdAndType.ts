import React from "react";
import { useQuery } from "react-query";
import { ContentEducationalPricingService } from "../../../services";

const useGetPriceWithGradeLevelIdAndBookIdAndType = (
  bookId: string,
  gradeLevelId: string,
  type: string,
) => {
  return useQuery(
    ["Get-Price-With-Grade-Level-Id-And-Book-Id-And-Type"],
    async () => {
      return await ContentEducationalPricingService.contentEducationalPricingControllerFindPriceBasedOnBookAndGradeLevelAndType(
        bookId,
        gradeLevelId,
        type,
      );
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetPriceWithGradeLevelIdAndBookIdAndType;
