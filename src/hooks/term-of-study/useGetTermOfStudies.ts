import React from "react";
import { useQuery } from "react-query";
import { BookService, TermOfStudyService } from "../../services";

const useGetTermOfStudies = () => {
    return useQuery(
        ["Get-All-Term-Of-Studies"],
        async () => {
            return await TermOfStudyService.termOfStudyControllerFindAll();
        },
        { refetchOnWindowFocus: false }
    );
};

export default useGetTermOfStudies;
