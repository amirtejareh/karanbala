import React from "react";
import { useMutation } from "react-query";
import { NewsService } from "../../services";

const useCreateNews = () => {
  return useMutation((request: any) => {
    return NewsService.newsControllerCreate({ ...request });
  });
};

export default useCreateNews;
