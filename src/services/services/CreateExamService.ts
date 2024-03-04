/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCreateExamDto } from '../models/CreateCreateExamDto';
import type { UpdateCreateExamDto } from '../models/UpdateCreateExamDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CreateExamService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerCreate(
requestBody: CreateCreateExamDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create-exam',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAll(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAllCreateExamsBasedOnStandardExam(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withStandardExam',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAllCreateExamsBasedOnSubjectiveExam(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withSubjectiveExam',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param bookId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateExamsBasedOnBooks(
page: number,
limit: number,
bookId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withBooks/{BookId}',
            query: {
                'page': page,
                'limit': limit,
                'BookId': bookId,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/{id}',
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
    public static createExamControllerUpdate(
id: string,
requestBody: UpdateCreateExamDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/create-exam/{id}',
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
    public static createExamControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/create-exam/{id}',
            path: {
                'id': id,
            },
        });
    }

}
