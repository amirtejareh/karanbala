import React from "react";
import { useMutation } from "react-query";
import { BookReferenceService } from "../../services";

const useDeleteBookReference = () => {
    return useMutation((request: string) => {
        return BookReferenceService.bookReferenceControllerRemove(request);
    });
};

export default useDeleteBookReference;
