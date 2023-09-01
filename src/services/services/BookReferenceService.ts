/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBookReferenceDto } from "../models/CreateBookReferenceDto";
import type { UpdateBookReferenceDto } from "../models/UpdateBookReferenceDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BookReferenceService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bookReferenceControllerCreate(
        requestBody: CreateBookReferenceDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/bookReference",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static bookReferenceControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/bookReference",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookReferenceControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/bookReference/{id}",
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
    public static bookReferenceControllerUpdate(
        id: string,
        requestBody: UpdateBookReferenceDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/bookReference/{id}",
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
    public static bookReferenceControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/bookReference/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param gradeLevelId
     * @returns any
     * @throws ApiError
     */
    public static bookReferenceControllerFindBookReferencesBasedOnGradeLevels(
        gradeLevelId: Array<string>
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/bookReference/withGradeLevels/{gradeLevelId}",
            path: {
                gradeLevelId: gradeLevelId,
            },
        });
    }
}
