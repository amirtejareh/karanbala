/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSectionDto } from "../models/CreateSectionDto";
import type { UpdateSectionDto } from "../models/UpdateSectionDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SectionService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static sectionControllerCreate(requestBody: CreateSectionDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/section",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static sectionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/section",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static sectionControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/section/{id}",
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
    public static sectionControllerUpdate(
        id: string,
        requestBody: UpdateSectionDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/section/{id}",
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
    public static sectionControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/section/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param chapterId
     * @returns any
     * @throws ApiError
     */
    public static sectionControllerFindSectionsBasedOnChapters(
        chapterId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/section/withChapters/{chapterId}",
            path: {
                chapterId: chapterId,
            },
        });
    }
}
