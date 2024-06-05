import React from "react";
import { useQuery } from "react-query";
import { NewsService } from "../../services";

const useGetSomeNews = (limit: number) => {
  return useQuery(
    ["Get-Some-News"],
    async () => {
      return await NewsService.newsControllerFindSome(limit);
    },
    { refetchOnWindowFocus: false, enabled: !!limit },
  );
};

export default useGetSomeNews;
