/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAnswersheetManagementDto } from '../models/CreateAnswersheetManagementDto';
import type { UpdateAnswersheetManagementDto } from '../models/UpdateAnswersheetManagementDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnswersheetManagementService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static answersheetManagementControllerCreate(
formData: CreateAnswersheetManagementDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/answersheet-management',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static answersheetManagementControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/answersheet-management',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static answersheetManagementControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/answersheet-management/{id}',
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
    public static answersheetManagementControllerUpdate(
id: string,
formData: UpdateAnswersheetManagementDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/answersheet-management/{id}',
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
    public static answersheetManagementControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/answersheet-management/{id}',
            path: {
                'id': id,
            },
        });
    }

}
