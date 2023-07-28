import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import { store } from "../provider/store";
import { ActionInterface, ActionTypeEnum } from "../provider/action.interface";
import jwt_decode from "jwt-decode";
import { OpenAPI } from "../services/core/OpenAPI";

interface MainLayoutComponentProps {
    children: React.ReactNode;
}

const MainLayoutComponent = ({ children }: MainLayoutComponentProps) => {
    const auth = useSelector((state: MainReducerInterface) => state.auth);
    const token: any = auth.token ?? localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            var decoded = jwt_decode(token ?? "");

            OpenAPI.TOKEN = token;
            store.dispatch<ActionInterface<any>>({
                type: ActionTypeEnum.SetUserToken,
                payload: token,
            });

            store.dispatch<ActionInterface<any>>({
                type: ActionTypeEnum.SetUserData,
                payload: decoded,
            });
        }
    }, [token]);

    return <>{children}</>;
};

export default MainLayoutComponent;
