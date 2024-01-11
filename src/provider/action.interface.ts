export enum ActionTypeEnum {
    SetUserToken = "set user token",
    SetUserData = "set user data",
    SetBook = "set education detail data",
}

export interface ActionInterface<T> {
    type: ActionTypeEnum;
    payload: T;
}
