/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTipAndTestDto } from "../models/CreateTipAndTestDto";
import type { UpdateTipAndTestDto } from "../models/UpdateTipAndTestDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TipAndTestService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static tipAndTestControllerCreate(
        requestBody: CreateTipAndTestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/tip-and-test",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static tipAndTestControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tip-and-test",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static tipAndTestControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tip-and-test/{id}",
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
    public static tipAndTestControllerUpdate(
        id: string,
        requestBody: UpdateTipAndTestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/tip-and-test/{id}",
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
    public static tipAndTestControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/tip-and-test/{id}",
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
    public static tipAndTestControllerFindTipAndTestBasedOnSubject(
        subjectsId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tip-and-test/withSubjects/{subjectsId}",
            path: {
                subjectsId: subjectsId,
            },
        });
    }
}
