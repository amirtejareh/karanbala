import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useUpdateBook = () => {
    return useMutation((request: any) => {
        return DefaultService.bookControllerUpdate(request.id, {
            ...request,
            image: request.image[0],
        });
    });
};

export default useUpdateBook;
