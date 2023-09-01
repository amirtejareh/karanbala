import React from "react";
import { useQuery } from "react-query";
import { OnlineGradeReportService } from "../../services";

const useGetOnlineGradeLevelBasedObjectiveTest = (number: string) => {
    return useQuery(
        ["Get-Online-Grade-Level-Based-Objective-Test"],
        async () => {
            return await OnlineGradeReportService.onlineGradeReportControllerGetObjectiveTestsBasedNumber(
                number
            );
        },
        { refetchOnWindowFocus: false, enabled: false }
    );
};

export default useGetOnlineGradeLevelBasedObjectiveTest;
