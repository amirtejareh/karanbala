import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { authStore, userStore } from "../stores";
import EducationDetailStore from "../stores/educationDetailStore";

const CheckRoutes = () => {
  const navigate = useNavigate();
  const { accessToken } = authStore((state) => state);
  const userData: any = userStore((state) => state);
  const { setBook, book } = EducationDetailStore((state) => state);

  useEffect(() => {
    if (accessToken === undefined || accessToken === null) {
      navigate("/");
    } else if (accessToken && userData === null) {
      userData.setUser(jwt_decode(accessToken));
    }
  }, [navigate, accessToken]);

  useEffect(() => {
    if (userData && userData?.user?.roles) {
      if (userData?.user?.roles?.some((element: any) => element.title == "User")) {
        navigate("/dashboard/user/purchase");
      }

      if (userData?.user?.roles?.some((element: any) => element.title == "SuperAdmin")) {
        navigate("/dashboard/admin/field-of-study");
      }
    }
  }, [userData.user]);

  return <>Loading...</>;
};

export default CheckRoutes;
