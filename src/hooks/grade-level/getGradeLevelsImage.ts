import React from "react";
import { useQuery } from "react-query";
import { DefaultService } from "../../services";

const getGradeLevelsImage = async (image: string) => {
    const response = await fetch(`http://localhost:3000/grade-level/image/${image}`);
    return await response.blob();
};

export default getGradeLevelsImage;
