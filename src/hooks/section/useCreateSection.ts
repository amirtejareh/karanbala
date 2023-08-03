import React from "react";
import { useMutation } from "react-query";
import { SectionService } from "../../services";

const useCreateSection = () => {
    return useMutation((request: any) => {
        return SectionService.sectionControllerCreate({ ...request });
    });
};

export default useCreateSection;
