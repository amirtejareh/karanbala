import { ActionInterface, ActionTypeEnum } from "../action.interface";

export interface AuthReducerInterface {
    token: undefined;
}
export const AuthReducer = (
    state: any = {
        token: undefined,
    },
    action: ActionInterface<any>
) => {
    switch (action.type) {
        case ActionTypeEnum.SetUserToken:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};
