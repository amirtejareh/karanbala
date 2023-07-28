import { Navigate } from "react-router-dom";

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
    const hasRequiredRole = userRole?.roles?.some((role: any) => {
        return (
            route.requiredRoles.includes(role.title) &&
            role.permissions?.some((permission: any) => {
                return permission.resource === route.resource && permission.action === route.action;
            })
        );
    });

    if (!hasRequiredRole && hasRequiredRole !== undefined) {
        localStorage.removeItem("token");
        return <Navigate to={"/"} />;
    }

    return <>{children}</>;
};

export default AuthorizedRoute;
