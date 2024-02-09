/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSampleExampleQuestionsDto } from "../models/CreateSampleExampleQuestionsDto";
import type { UpdateSampleExampleQuestionsDto } from "../models/UpdateSampleExampleQuestionsDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SampleExampleQuestionsService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static sampleExampleQuestionsControllerCreate(
        requestBody: CreateSampleExampleQuestionsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/sample-example-questions",
            body: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static sampleExampleQuestionsControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/sample-example-questions",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static sampleExampleQuestionsControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/sample-example-questions/{id}",
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
    public static sampleExampleQuestionsControllerUpdate(
        id: string,
        requestBody: UpdateSampleExampleQuestionsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/sample-example-questions/{id}",
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static sampleExampleQuestionsControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/sample-example-questions/{id}",
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
    public static sampleExampleQuestionsControllerFindSampleExampleQuestionsBasedOnSubject(
        subjectsId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/sample-example-questions/withSubjects/{subjectsId}",
            path: {
                subjectsId: subjectsId,
            },
        });
    }

    /**
     * @param booksId
     * @returns any
     * @throws ApiError
     */
    public static sampleExampleQuestionsControllerFindSampleExampleQuestionsBasedOnBooks(
        booksId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/sample-example-questions/withBooks/{booksId}",
            path: {
                booksId: booksId,
            },
        });
    }
}
