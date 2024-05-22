/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFirstQuestionDto } from '../models/CreateFirstQuestionDto';
import type { UpdateFirstQuestionDto } from '../models/UpdateFirstQuestionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FirstQuestionService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static firstQuestionControllerCreate(
requestBody: CreateFirstQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/first-question',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static firstQuestionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/first-question',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static firstQuestionControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/first-question/{id}',
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
    public static firstQuestionControllerUpdate(
id: string,
requestBody: UpdateFirstQuestionDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/first-question/{id}',
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
    public static firstQuestionControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/first-question/{id}',
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
    public static firstQuestionControllerFindFirstQuestionBasedOnPrimaryQuestionIdAndComprehensiveTestId(
primaryQuestionlId: string,
comprehensiveTestId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/first-question/withPrimaryQuestions/{primaryQuestionId}/{primaryQuestionlId}',
            query: {
                'primaryQuestionlId': primaryQuestionlId,
                'comprehensiveTestId': comprehensiveTestId,
            },
        });
    }

}
