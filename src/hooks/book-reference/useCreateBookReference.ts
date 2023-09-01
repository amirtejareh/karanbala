import React from "react";
import { useMutation } from "react-query";
import { BookReferenceService } from "../../services";

const useCreateBookReference = () => {
    return useMutation((request: any) => {
        return BookReferenceService.bookReferenceControllerCreate({ ...request });
    });
};

export default useCreateBookReference;
