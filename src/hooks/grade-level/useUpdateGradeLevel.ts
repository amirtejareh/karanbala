import React from "react";
import { useMutation } from "react-query";
import { DefaultService } from "../../services";

const useUpdateGradeLevel = () => {
    return useMutation((request: any) => {
        console.log(request.id, request.title, request.description, request.image);

        return DefaultService.gradeLevelControllerUpdate(request.id, {
            id: request.id,

            title: request.title,
            description: request.description,
            image: request.image[0],
        });
    });
};

export default useUpdateGradeLevel;
