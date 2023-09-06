/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBookDto } from "../models/CreateBookDto";
import type { UpdateBookDto } from "../models/UpdateBookDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BookService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bookControllerCreate(requestBody: CreateBookDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/book",
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static bookControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book/{id}",
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
    public static bookControllerUpdate(
        id: string,
        requestBody: UpdateBookDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/book/{id}",
            path: {
                id: id,
            },
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/book/{id}",
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
    public static bookControllerFindBooksBasedOnGradeLevels(
        gradeLevelId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book/withGradeLevels/{gradeLevelId}",
            path: {
                gradeLevelId: gradeLevelId,
            },
        });
    }

    /**
     * @param bookReferenceId
     * @param gradeLevelId
     * @returns any
     * @throws ApiError
     */
    public static bookControllerFindBooksBasedOnBookReferences(
        bookReferenceId: Array<string>,
        gradeLevelId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book/withBookReferences/{bookReferenceId}/{gradeLevelId}",
            path: {
                bookReferenceId: bookReferenceId,
                gradeLevelId: gradeLevelId,
            },
        });
    }
}
