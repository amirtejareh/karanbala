import React from "react";
import { useMutation } from "react-query";
import { BookReferenceService } from "../../services";

const useUpdateBookReference = () => {
    return useMutation((request: any) => {
        return BookReferenceService.bookReferenceControllerUpdate(request.id, {
            ...request,
            image: request.image[0],
        });
    });
};

export default useUpdateBookReference;
