/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFieldOfStudyDto } from "../models/CreateFieldOfStudyDto";
import type { UpdateFieldOfStudyDto } from "../models/UpdateFieldOfStudyDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FieldOfStudyService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerCreate(
        requestBody: CreateFieldOfStudyDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/field-of-study",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/field-of-study",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/field-of-study/{id}",
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
    public static fieldOfStudyControllerUpdate(
        id: string,
        requestBody: UpdateFieldOfStudyDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/field-of-study/{id}",
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
    public static fieldOfStudyControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/field-of-study/{id}",
            path: {
                id: id,
            },
        });
    }
}
