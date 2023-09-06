/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBookExercisesDto } from "../models/CreateBookExercisesDto";
import type { UpdateBookExercisesDto } from "../models/UpdateBookExercisesDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BookExercisesService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bookExercisesControllerCreate(
        requestBody: CreateBookExercisesDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/book-exercises",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static bookExercisesControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book-exercises",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookExercisesControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book-exercises/{id}",
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
    public static bookExercisesControllerUpdate(
        id: string,
        requestBody: UpdateBookExercisesDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/book-exercises/{id}",
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
    public static bookExercisesControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/book-exercises/{id}",
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
    public static bookExercisesControllerFindBookExercisesBasedOnSubject(
        subjectsId: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book-exercises/withSubjects/{subjectsId}",
            path: {
                subjectsId: subjectsId,
            },
        });
    }
}
