import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import { store } from "../provider/store";
import { ActionInterface, ActionTypeEnum } from "../provider/action.interface";
import jwt_decode from "jwt-decode";

const MainLayoutComponent = (props: any) => {
    const auth = useSelector((state: MainReducerInterface) => state.auth);
    const token = auth.token ?? localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            var decoded = jwt_decode(token ?? "");

            store.dispatch<ActionInterface<any>>({
                type: ActionTypeEnum.SetUserToken,
                payload: token,
            });

            store.dispatch<ActionInterface<any>>({
                type: ActionTypeEnum.SetUserData,
                payload: decoded,
            });
        }

        // setUserData(data);
        // const token = auth.token ?? localStorage.getItem("token");
    }, [token]);

    return <>{props.children}</>;
};

export default MainLayoutComponent;
