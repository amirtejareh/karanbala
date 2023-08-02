import React from "react";
import { useMutation } from "react-query";
import { BookService } from "../../services";

const useUpdateBook = () => {
    return useMutation((request: any) => {
        return BookService.bookControllerUpdate(request.id, {
            ...request,
            image: request.image[0],
        });
    });
};

export default useUpdateBook;
