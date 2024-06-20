import React from "react";
import { useQuery } from "react-query";
import { UserService } from "../../services";

const useGetUserBasedOnUsername = (username: string) => {
  return useQuery(
    ["Get-User-Based-On-Username"],
    async () => {
      return await UserService.usersControllerGetUserBasedOnUsername(username);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!username,
    },
  );
};

export default useGetUserBasedOnUsername;
