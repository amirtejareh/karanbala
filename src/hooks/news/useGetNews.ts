import React from "react";
import { useQuery } from "react-query";
import { NewsService } from "../../services";

const useGetNews = () => {
  return useQuery(
    ["Get-All-News"],
    async () => {
      return await NewsService.newsControllerFindAll();
    },
    { refetchOnWindowFocus: false },
  );
};

export default useGetNews;
