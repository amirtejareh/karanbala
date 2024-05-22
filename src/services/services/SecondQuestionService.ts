/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSecondQuestionDto } from '../models/CreateSecondQuestionDto';
import type { UpdateSecondQuestionDto } from '../models/UpdateSecondQuestionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SecondQuestionService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static secondQuestionControllerCreate(
requestBody: CreateSecondQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/second-question',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static secondQuestionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/second-question',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static secondQuestionControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/second-question/{id}',
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
    public static secondQuestionControllerUpdate(
id: string,
requestBody: UpdateSecondQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/second-question/{id}',
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
    public static secondQuestionControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/second-question/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param primaryQuestionlId 
     * @param comprehensiveTestId 
     * @returns any 
     * @throws ApiError
     */
    public static secondQuestionControllerFindSecondQuestionBasedOnPrimaryQuestionIdAndComprehensiveTestId(
primaryQuestionlId: string,
comprehensiveTestId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/second-question/withPrimaryQuestions/{primaryQuestionId}/{primaryQuestionlId}',
            query: {
                'primaryQuestionlId': primaryQuestionlId,
                'comprehensiveTestId': comprehensiveTestId,
            },
        });
    }

}
