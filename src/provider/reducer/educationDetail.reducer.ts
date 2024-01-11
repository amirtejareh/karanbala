import { ActionInterface, ActionTypeEnum } from "../action.interface";

export interface EducationDetailReducerInterface {
    book: undefined;
}
export const EducationDetailReducer = (
    state: any = {
        book: undefined,
    },
    action: ActionInterface<any>,
) => {
    switch (action.type) {
        case ActionTypeEnum.SetBook:
            return {
                ...state,
                book: action.payload,
            };
        default:
            return state;
    }
};
