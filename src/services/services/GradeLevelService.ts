/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGradeLevelDto } from '../models/CreateGradeLevelDto';
import type { UpdateGradeLevelDto } from '../models/UpdateGradeLevelDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GradeLevelService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static gradeLevelControllerCreate(
formData: CreateGradeLevelDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/grade-level',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static gradeLevelControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/grade-level',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static gradeLevelControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/grade-level/{id}',
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
    public static gradeLevelControllerUpdate(
id: string,
formData: UpdateGradeLevelDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/grade-level/{id}',
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
    public static gradeLevelControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/grade-level/{id}',
            path: {
                'id': id,
            },
        });
    }

}
