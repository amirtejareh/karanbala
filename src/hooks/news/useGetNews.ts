import React from "react";
import { useQuery } from "react-query";
import { NewsService } from "../../services";

const useGetNews = (page: number, limit: number) => {
  return useQuery(
    ["Get-All-News"],
    async () => {
      return await NewsService.newsControllerFindAll(page, limit);
    },
    { refetchOnWindowFocus: false },
  );
};

export default useGetNews;
