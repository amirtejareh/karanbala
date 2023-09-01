import React from "react";
import { useMutation } from "react-query";
import { OnlineGradeReportService } from "../../services";

const useCreateOnlineGradeReport = () => {
    return useMutation((request: any) => {
        return OnlineGradeReportService.onlineGradeReportControllerCreate({ ...request });
    });
};

export default useCreateOnlineGradeReport;
