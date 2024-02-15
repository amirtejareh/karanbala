/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBookIntroDto } from '../models/CreateBookIntroDto';
import type { UpdateBookIntroDto } from '../models/UpdateBookIntroDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookIntroService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static bookIntroControllerCreate(
formData: CreateBookIntroDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/book-intro',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static bookIntroControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book-intro',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static bookIntroControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book-intro/{id}',
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
    public static bookIntroControllerUpdate(
id: string,
formData: UpdateBookIntroDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/book-intro/{id}',
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
    public static bookIntroControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/book-intro/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param booksId 
     * @returns any 
     * @throws ApiError
     */
    public static bookIntroControllerFindBookIntroBasedOnBooks(
booksId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book-intro/withBooks/{booksId}',
            path: {
                'booksId': booksId,
            },
        });
    }

}
