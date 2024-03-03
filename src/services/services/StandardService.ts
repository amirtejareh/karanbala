/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStandardDto } from '../models/CreateStandardDto';
import type { UpdateStandardDto } from '../models/UpdateStandardDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StandardService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static standardControllerCreate(
requestBody: CreateStandardDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/standard',
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
    public static standardControllerFindAll(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/standard',
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
    public static standardControllerFindStandardsBasedOnBooks(
page: number,
limit: number,
bookId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/standard/withBooks/{BookId}',
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
    public static standardControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/standard/{id}',
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
    public static standardControllerUpdate(
id: string,
requestBody: UpdateStandardDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/standard/{id}',
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
    public static standardControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/standard/{id}',
            path: {
                'id': id,
            },
        });
    }

}
