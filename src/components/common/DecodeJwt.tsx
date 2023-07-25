import React from "react";
import { useJwt } from "react-jwt";

function DecodeJwt(props: any) {
    const decodedToken = useJwt(props);
    return decodedToken;
}

export default DecodeJwt;
