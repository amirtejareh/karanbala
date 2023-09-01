import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { OpenAPI } from "../services/core/OpenAPI";
import { authStore, userStore } from "../stores";

interface MainLayoutComponentProps {
    children: React.ReactNode;
}

const PublicLayoutComponent = ({ children }: MainLayoutComponentProps) => {
    const { accessToken } = authStore((state) => state);
    const userData: any = userStore((state) => state);

    useEffect(() => {
        if (accessToken && userData.user === null) {
            const user = jwt_decode(accessToken ?? "");
            OpenAPI.TOKEN = accessToken;
            userData.setUser(user);
        } else {
            OpenAPI.TOKEN = accessToken;
        }
    }, [accessToken, userData]);

    return <>{children}</>;
};

export default PublicLayoutComponent;
