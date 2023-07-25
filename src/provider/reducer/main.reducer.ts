import { combineReducers } from "redux";
import { AuthReducer, AuthReducerInterface } from "./auth.reducer";
import { UserReducer, UserReducerInterface } from "./user.reducer";

export interface MainReducerInterface {
    auth: AuthReducerInterface;
    user: UserReducerInterface;
}

export const mainReducer = combineReducers<MainReducerInterface>({
    auth: AuthReducer,
    user: UserReducer,
});
