import { Navigate, useNavigate } from "react-router-dom";
import { authStore, userStore } from "../../stores";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

interface AuthorizedRouteProps {
    route: {
        requiredRoles: string[];
        resource: string;
        action: string;
    };

    userRole: any;
    children: React.ReactNode;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({ route, userRole, children }) => {
    const { accessToken, setAccessToken } = authStore((state) => state);
    const { setUser } = userStore((state) => state);
    const navigate = useNavigate();
    useEffect(() => {
        if (accessToken) {
            const decodedToken: { sub: string; username: string; exp: number; iat: number } =
                jwt_decode(accessToken ?? localStorage.getItem("auth-storage"));
            const currentTime = Math.floor(Date.now() / 1000);

            if (currentTime > decodedToken.exp) {
                localStorage.removeItem("auth-storage");
                setUser(null);
                setAccessToken(null);
                navigate("/");
            }
        } else {
            localStorage.removeItem("auth-storage");
            setUser(null);
            setAccessToken(null);
            navigate("/");
        }
    }, [accessToken, navigate]);

    const hasRequiredRole = userRole?.roles?.some((role: any) => {
        return (
            route.requiredRoles.includes(role.title) &&
            role.permissions?.some((permission: any) => {
                return permission.resource === route.resource && permission.action === route.action;
            })
        );
    });

    if (!hasRequiredRole && hasRequiredRole !== undefined) {
        localStorage.removeItem("auth-storage");
        setUser(null);
        setAccessToken(null);

        return <Navigate to={"/"} />;
    }

    return <>{children}</>;
};

export default AuthorizedRoute;
