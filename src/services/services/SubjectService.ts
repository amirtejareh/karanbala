/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubjectDto } from '../models/CreateSubjectDto';
import type { UpdateSubjectDto } from '../models/UpdateSubjectDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static subjectControllerCreate(
requestBody: CreateSubjectDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static subjectControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static subjectControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject/{id}',
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
    public static subjectControllerUpdate(
id: string,
requestBody: UpdateSubjectDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/subject/{id}',
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
    public static subjectControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param sectionId 
     * @returns any 
     * @throws ApiError
     */
    public static subjectControllerFindSubjectsBasedOnSections(
sectionId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject/withSections/{sectionId}',
            path: {
                'sectionId': sectionId,
            },
        });
    }

}
