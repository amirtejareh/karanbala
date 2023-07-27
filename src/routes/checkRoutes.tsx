import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const CheckRoutes = () => {
    const navigate = useNavigate();
    const token: any = localStorage.getItem("token");
    const [data, setData] = useState<any>();

    useEffect(() => {
        if (data) {
            if (data?.roles.every((element: any) => element.title == "User")) {
                navigate("/pv/karanbala/dashboard");
            }

            if (data?.roles.every((element: any) => element.title == "SuperAdmin")) {
                navigate("/pv/karanbala/admin");
            }
        }
    }, [data]);

    useEffect(() => {
        if (token === undefined || token === null) {
            navigate("/");
        } else {
            setData(jwt_decode(token));
        }
    }, [navigate, token]);

    return <>Loading...</>;
};

export default CheckRoutes;
