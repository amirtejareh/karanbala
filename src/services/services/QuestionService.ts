/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateQuestionDto } from "../models/CreateQuestionDto";
import type { UpdateQuestionDto } from "../models/UpdateQuestionDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class QuestionService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static questionControllerCreate(requestBody: CreateQuestionDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/question",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static questionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/question",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static questionControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/question/{id}",
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
    public static questionControllerUpdate(
        id: string,
        requestBody: UpdateQuestionDto
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/question/{id}",
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
    public static questionControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/question/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param objectiveTestId
     * @returns any
     * @throws ApiError
     */
    public static questionControllerFindBooksBasedOnObjectiveTests(
        objectiveTestId: Array<string>
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/question/withMainObjectiveTestId/{objectiveTestId}",
            path: {
                objectiveTestId: objectiveTestId,
            },
        });
    }
}
