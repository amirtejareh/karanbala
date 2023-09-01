import React from "react";
import { useMutation } from "react-query";
import { LearningMaterialService } from "../../services";

const useDeleteLearningMaterial = () => {
    return useMutation((request: string) => {
        return LearningMaterialService.learningMaterialControllerRemove(request);
    });
};

export default useDeleteLearningMaterial;
