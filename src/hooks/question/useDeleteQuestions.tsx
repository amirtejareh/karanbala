import { useMutation } from "react-query";
import { QuestionService } from "../../services";

const useDeleteQuestions = () => {
    return useMutation((id: string) => {
        return QuestionService.questionControllerRemove(id);
    });
};

export default useDeleteQuestions;
