/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateObjectiveTestManagementDto } from "../models/CreateObjectiveTestManagementDto";
import type { UpdateObjectiveTestManagementDto } from "../models/UpdateObjectiveTestManagementDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ObjectiveTestManagementService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static objectiveTestManagementControllerCreate(
        requestBody: CreateObjectiveTestManagementDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/objectiveTestManagement",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static objectiveTestManagementControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/objectiveTestManagement",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static objectiveTestManagementControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/objectiveTestManagement/{id}",
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
    public static objectiveTestManagementControllerUpdate(
        id: string,
        requestBody: UpdateObjectiveTestManagementDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/objectiveTestManagement/{id}",
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
    public static objectiveTestManagementControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/objectiveTestManagement/{id}",
            path: {
                id: id,
            },
        });
    }
}
