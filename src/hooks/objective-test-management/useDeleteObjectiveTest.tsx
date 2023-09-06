import { useMutation } from "react-query";
import { ObjectiveTestManagementService } from "../../services";

const useDeleteObjectiveTestManagement = () => {
    return useMutation((id: string) => {
        return ObjectiveTestManagementService.objectiveTestManagementControllerRemove(id);
    });
};

export default useDeleteObjectiveTestManagement;
