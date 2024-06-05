import React from "react";
import { useQuery } from "react-query";
import { NewsService } from "../../services";

const useGetNewsBasedOnId = (id: string) => {
  return useQuery(
    ["Get-News-Based-On-Id"],
    async () => {
      return await NewsService.newsControllerFindOne(id);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetNewsBasedOnId;
