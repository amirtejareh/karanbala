import React from "react";
import { useMutation } from "react-query";
import { UserService } from "../../services";

const useUpdateUser = () => {
  return useMutation((request: any) => {
    return UserService.usersControllerUpdate(request.username, { ...request });
  });
};

export default useUpdateUser;
