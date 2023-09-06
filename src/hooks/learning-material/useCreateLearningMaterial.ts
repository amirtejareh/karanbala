import React from "react";
import { useMutation } from "react-query";
import { LearningMaterialService } from "../../services";

const useCreateLearningMaterial = () => {
    return useMutation((request: any) => {
        return LearningMaterialService.learningMaterialControllerCreate({ ...request });
    });
};

export default useCreateLearningMaterial;
