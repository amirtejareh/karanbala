import React from "react";
import { useMutation } from "react-query";
import { NewsService } from "../../services";

const useDeleteNews = () => {
  return useMutation((request: string) => {
    return NewsService.newsControllerRemove(request);
  });
};

export default useDeleteNews;
