/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateComprehensiveTestDto } from '../models/CreateComprehensiveTestDto';
import type { UpdateComprehensiveTestDto } from '../models/UpdateComprehensiveTestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ComprehensiveTestService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static comprehensiveTestControllerCreate(
formData: CreateComprehensiveTestDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comprehensive-test',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static comprehensiveTestControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comprehensive-test',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static comprehensiveTestControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comprehensive-test/{id}',
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
    public static comprehensiveTestControllerUpdate(
id: string,
requestBody: UpdateComprehensiveTestDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/comprehensive-test/{id}',
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
    public static comprehensiveTestControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/comprehensive-test/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param chapterId 
     * @returns any 
     * @throws ApiError
     */
    public static comprehensiveTestControllerFindComprehensiveTestBasedOnChapters(
chapterId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comprehensive-test/withChapters/{chapterId}',
            path: {
                'chapterId': chapterId,
            },
        });
    }

}
