/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateChapterDto } from "../models/CreateChapterDto";
import type { UpdateChapterDto } from "../models/UpdateChapterDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
 
export class ChapterService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static chapterControllerCreate(requestBody: CreateChapterDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/chapter",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chapterControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/chapter",
        });
    }

    /**
     * @param bookId
     * @returns any
     * @throws ApiError
     */
    public static chapterControllerFindChaptersBasedOnBooks(
        bookId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/chapter/withBooks/{bookId}",
            path: {
                bookId: bookId,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static chapterControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/chapter/{id}",
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
    public static chapterControllerUpdate(
        id: string,
        requestBody: UpdateChapterDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/chapter/{id}",
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
    public static chapterControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/chapter/{id}",
            path: {
                id: id,
            },
        });
    }
}
