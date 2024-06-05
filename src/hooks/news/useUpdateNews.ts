import React from "react";
import { useMutation } from "react-query";
import { NewsService } from "../../services";

const useUpdateNews = () => {
  return useMutation((request: any) => {
    return NewsService.newsControllerUpdate(request.id, {
      ...request,
      image: request.image[0],
    });
  });
};

export default useUpdateNews;
