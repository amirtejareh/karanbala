/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLearningMaterialDto } from '../models/CreateLearningMaterialDto';
import type { UpdateLearningMaterialDto } from '../models/UpdateLearningMaterialDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LearningMaterialService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static learningMaterialControllerCreate(
formData: CreateLearningMaterialDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/learning-material',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static learningMaterialControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/learning-material',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static learningMaterialControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/learning-material/{id}',
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
    public static learningMaterialControllerUpdate(
id: string,
formData: UpdateLearningMaterialDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/learning-material/{id}',
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
    public static learningMaterialControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/learning-material/{id}',
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
    public static learningMaterialControllerFindLearningMaterialBasedOnSubject(
subjectsId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/learning-material/withSubjects/{subjectsId}',
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
    public static learningMaterialControllerFindLearningMaterialBasedOnBooks(
booksId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/learning-material/withBooks/{booksId}',
            path: {
                'booksId': booksId,
            },
        });
    }

}
