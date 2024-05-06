import React from "react";
import { useQuery } from "react-query";
import { BookService } from "../../services";

const useGetBookBasedOnId = (id: string) => {
  return useQuery(
    ["Get-All-Books"],
    async () => {
      return await BookService.bookControllerFindOne(id);
    },
    { refetchOnWindowFocus: false, enabled: false },
  );
};

export default useGetBookBasedOnId;
