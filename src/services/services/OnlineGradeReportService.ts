/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOnlineGradeReportDto } from "../models/CreateOnlineGradeReportDto";
import type { UpdateOnlineGradeReportDto } from "../models/UpdateOnlineGradeReportDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class OnlineGradeReportService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerCreate(
        requestBody: CreateOnlineGradeReportDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/online-grade-report",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/online-grade-report",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/online-grade-report/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerUpdate(
        id: string,
        requestBody: UpdateOnlineGradeReportDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/online-grade-report/{id}",
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/online-grade-report/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param objectiveTestId
     * @returns any
     * @throws ApiError
     */
    public static onlineGradeReportControllerGetObjectiveTestsBasedNumber(
        objectiveTestId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/online-grade-report/withObjectiveTests/{objectiveTestId}",
            path: {
                objectiveTestId: objectiveTestId,
            },
        });
    }
}
