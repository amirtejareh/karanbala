import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { store } from "../provider/store";
import { ActionTypeEnum, ActionInterface } from "../provider/action.interface";
import jwt_decode from "jwt-decode";

const CheckRoutes = () => {
    const navigate = useNavigate();
    const token: string = localStorage.getItem("token") ?? "";

    if (token == undefined) {
        navigate("/");
    }
    var data: any = jwt_decode(token ?? "");

    store.dispatch<ActionInterface<any>>({
        type: ActionTypeEnum.SetUserToken,
        payload: token,
    });

    store.dispatch<ActionInterface<any>>({
        type: ActionTypeEnum.SetUserData,
        payload: data,
    });

    useEffect(() => {
        if (data) {
            if (data?.roles.includes("User")) {
                navigate("/pv/karanbala/dashboard");
            }

            if (data?.roles.includes("SuperAdmin")) {
                navigate("/pv/karanbala/admin");
            }
        }
    }, [data]);

    useEffect(() => {
        if (token == undefined) {
            navigate("/");
        }
    }, [navigate, token]);

    return <>Loading...</>;
};

export default CheckRoutes;
