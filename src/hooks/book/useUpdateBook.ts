import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useUpdateBook = () => {
    return useMutation((request: any) => {
        return DefaultService.bookControllerUpdate(request.id, { title: request.title });
    });
};

export default useUpdateBook;