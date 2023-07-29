import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { authStore, userStore } from "../stores";

const CheckRoutes = () => {
    const navigate = useNavigate();
    const { accessToken } = authStore((state) => state);
    const userData: any = userStore((state) => state);

    useEffect(() => {
        if (accessToken === undefined || accessToken === null) {
            console.log("redirect to /");
            navigate("/");
        } else if (accessToken && userData === null) {
            userData.setUser(jwt_decode(accessToken));
        }
    }, [navigate, accessToken]);

    useEffect(() => {
        if (userData && userData?.user?.roles) {
            if (userData?.user?.roles?.every((element: any) => element.title == "User")) {
                navigate("/pv/karanbala/dashboard");
            }

            if (userData?.user?.roles?.every((element: any) => element.title == "SuperAdmin")) {
                navigate("/pv/karanbala/admin");
            }
        }
    }, [userData.user]);

    return <>Loading...</>;
};

export default CheckRoutes;
