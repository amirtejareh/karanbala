export enum ActionTypeEnum {
    SetUserToken = "set user token",
    SetUserData = "set user data",
}

export interface ActionInterface<T> {
    type: ActionTypeEnum;
    payload: T;
}
