import React from "react";
import { useMutation } from "react-query";
import { BookIntroService } from "../../services";

const useCreateBookIntro = () => {
    return useMutation((request: any) => {
        return BookIntroService.bookIntroControllerCreate({ ...request });
    });
};

export default useCreateBookIntro;
