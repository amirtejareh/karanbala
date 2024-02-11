import React from "react";
import { useQuery } from "react-query";
import { AttachService } from "../../services";

const useGetAttachBasedOnSubjects = (subject: string[]) => {
    return useQuery(
        ["Get-All-Attach-Based-On-Subject"],
        async () => {
            return await AttachService.attachControllerFindAttachBasedOnSubject(subject);
        },
        { refetchOnWindowFocus: false, enabled: false },
    );
};

export default useGetAttachBasedOnSubjects;
