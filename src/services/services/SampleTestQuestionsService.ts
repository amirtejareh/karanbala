/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSampleTestQuestionsDto } from '../models/CreateSampleTestQuestionsDto';
import type { UpdateSampleTestQuestionsDto } from '../models/UpdateSampleTestQuestionsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SampleTestQuestionsService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerCreate(
formData: CreateSampleTestQuestionsDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sample-test-questions',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sample-test-questions',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sample-test-questions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerUpdate(
id: string,
formData: UpdateSampleTestQuestionsDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sample-test-questions/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sample-test-questions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param subjectsId 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerFindSampleTestQuestionsBasedOnSubject(
subjectsId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sample-test-questions/withSubjects/{subjectsId}',
            path: {
                'subjectsId': subjectsId,
            },
        });
    }

    /**
     * @param booksId 
     * @returns any 
     * @throws ApiError
     */
    public static sampleTestQuestionsControllerFindSampleTestQuestionsBasedOnBooks(
booksId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sample-test-questions/withBooks/{booksId}',
            path: {
                'booksId': booksId,
            },
        });
    }

}
