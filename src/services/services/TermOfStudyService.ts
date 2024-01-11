/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTermOfStudyDto } from "../models/CreateTermOfStudyDto";
import type { UpdateTermOfStudyDto } from "../models/UpdateTermOfStudyDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TermOfStudyService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerCreate(
        requestBody: CreateTermOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/term-of-study",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/term-of-study",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/term-of-study/{id}",
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
    public static termOfStudyControllerUpdate(
        id: string,
        requestBody: UpdateTermOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/term-of-study/{id}",
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
    public static termOfStudyControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/term-of-study/{id}",
            path: {
                id: id,
            },
        });
    }
}
