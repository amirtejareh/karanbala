import { useMutation } from "react-query";
import { ObjectiveTestService } from "../../services";

const useDeleteObjectiveTest = () => {
    return useMutation((id: string) => {
        return ObjectiveTestService.objectiveTestControllerRemove(id);
    });
};

export default useDeleteObjectiveTest;
