/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEssayQuestionsDto } from "../models/CreateEssayQuestionsDto";
import type { UpdateEssayQuestionDto } from "../models/UpdateEssayQuestionDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class EssayQuestionService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static essayQuestionControllerCreate(
        requestBody: CreateEssayQuestionsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/essay-question",
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static essayQuestionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/essay-question",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static essayQuestionControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/essay-question/{id}",
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
    public static essayQuestionControllerUpdate(
        id: string,
        requestBody: UpdateEssayQuestionDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/essay-question/{id}",
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
    public static essayQuestionControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/essay-question/{id}",
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
    public static essayQuestionControllerFindEssayQuestionBasedOnSubject(
        subjectsId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/essay-question/withSubjects/{subjectsId}",
            path: {
                subjectsId: subjectsId,
            },
        });
    }
}
