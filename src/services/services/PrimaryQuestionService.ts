/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePrimaryQuestionDto } from '../models/CreatePrimaryQuestionDto';
import type { UpdatePrimaryQuestionDto } from '../models/UpdatePrimaryQuestionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PrimaryQuestionService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerCreate(
requestBody: CreatePrimaryQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/primary-question',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/primary-question',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/primary-question/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerUpdate(
id: string,
requestBody: UpdatePrimaryQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/primary-question/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/primary-question/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param comprehensiveTestIds 
     * @returns any 
     * @throws ApiError
     */
    public static primaryQuestionControllerFindPrimaryTestsBasedOnComprehensiveTestId(
comprehensiveTestIds: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/primary-question/withComprehensiveTest/{comprehensiveTestIds}',
            path: {
                'comprehensiveTestIds': comprehensiveTestIds,
            },
        });
    }

}
