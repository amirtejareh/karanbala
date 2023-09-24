/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAnswersheetManagementDto } from "../models/CreateAnswersheetManagementDto";
import type { UpdateAnswersheetManagementDto } from "../models/UpdateAnswersheetManagementDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AnswersheetManagementService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static answersheetManagementControllerCreate(
        requestBody: CreateAnswersheetManagementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/answersheet-management",
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static answersheetManagementControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/answersheet-management",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static answersheetManagementControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/answersheet-management/{id}",
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
    public static answersheetManagementControllerUpdate(
        id: string,
        requestBody: UpdateAnswersheetManagementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/answersheet-management/{id}",
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
    public static answersheetManagementControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/answersheet-management/{id}",
            path: {
                id: id,
            },
        });
    }
}
