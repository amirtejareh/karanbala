import React from "react";
import { useMutation } from "react-query";
import { LearningMaterialService } from "../../services";

const useUpdateLearningMaterial = () => {
    return useMutation((request: any) => {
        return LearningMaterialService.learningMaterialControllerUpdate(request.id, { ...request });
    });
};

export default useUpdateLearningMaterial;
