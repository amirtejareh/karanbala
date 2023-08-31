/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateKaranbalaDto } from "../models/CreateKaranbalaDto";
import type { UpdateKaranbalaDto } from "../models/UpdateKaranbalaDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class KaranbalaService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static karanbalaControllerCreate(
        requestBody: CreateKaranbalaDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/karanbala",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static karanbalaControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/karanbala",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static karanbalaControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/karanbala/{id}",
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
    public static karanbalaControllerUpdate(
        id: string,
        requestBody: UpdateKaranbalaDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/karanbala/{id}",
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
    public static karanbalaControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/karanbala/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param subjectsId
     * @returns any
     * @throws ApiError
     */
    public static karanbalaControllerFindKaranbalaBasedOnSubject(
        subjectsId: Array<string>
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/karanbala/withSubjects/{subjectsId}",
            path: {
                subjectsId: subjectsId,
            },
        });
    }
}
