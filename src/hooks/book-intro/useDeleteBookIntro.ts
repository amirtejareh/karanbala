import React from "react";
import { useMutation } from "react-query";
import { BookIntroService } from "../../services";

const useDeleteBookIntro = () => {
    return useMutation((request: string) => {
        return BookIntroService.bookIntroControllerRemove(request);
    });
};

export default useDeleteBookIntro;
