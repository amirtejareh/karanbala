import { combineReducers } from "redux";
import { AuthReducer, AuthReducerInterface } from "./auth.reducer";
import { UserReducer, UserReducerInterface } from "./user.reducer";
import { EducationDetailReducerInterface, EducationDetailReducer } from "./educationDetail.reducer";

export interface MainReducerInterface {
    auth: AuthReducerInterface;
    user: UserReducerInterface;
    book: EducationDetailReducerInterface;
}

export const mainReducer = combineReducers<MainReducerInterface>({
    auth: AuthReducer,
    user: UserReducer,
    book: EducationDetailReducer,
});
