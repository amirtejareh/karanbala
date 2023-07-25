import { ActionInterface, ActionTypeEnum } from "../action.interface";

export interface UserReducerInterface {
    user: undefined;
}

export const UserReducer = (
    state: any = {
        user: undefined,
    },
    action: ActionInterface<any>
) => {
    switch (action.type) {
        case ActionTypeEnum.SetUserData:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
