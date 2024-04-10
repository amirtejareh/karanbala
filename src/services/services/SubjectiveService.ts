/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubjectiveDto } from '../models/CreateSubjectiveDto';
import type { UpdateSubjectiveDto } from '../models/UpdateSubjectiveDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectiveService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static subjectiveControllerCreate(
requestBody: CreateSubjectiveDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subjective',
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
    public static subjectiveControllerFindAll(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subjective',
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
    public static subjectiveControllerFindSubjectivesBasedOnBooks(
page: number,
limit: number,
bookId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subjective/withBooks/{BookId}',
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
    public static subjectiveControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subjective/{id}',
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
    public static subjectiveControllerUpdate(
id: string,
requestBody: UpdateSubjectiveDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/subjective/{id}',
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
    public static subjectiveControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subjective/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param createExamId 
     * @returns any 
     * @throws ApiError
     */
    public static subjectiveControllerFindSubjectiveExamsBasedOnCreateExam(
page: number,
limit: number,
createExamId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subjective/withCreateExam/{CreateExamId}',
            query: {
                'page': page,
                'limit': limit,
                'CreateExamId': createExamId,
            },
        });
    }

}
