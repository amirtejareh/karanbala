/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAttachDto } from '../models/CreateAttachDto';
import type { UpdateAttachDto } from '../models/UpdateAttachDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttachService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static attachControllerCreate(
formData: CreateAttachDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/attach',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static attachControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attach',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static attachControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attach/{id}',
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
    public static attachControllerUpdate(
id: string,
formData: UpdateAttachDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/attach/{id}',
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
    public static attachControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/attach/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param chaptersId 
     * @returns any 
     * @throws ApiError
     */
    public static attachControllerFindAttachBasedOnChapter(
chaptersId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attach/withChapters/{chaptersId}',
            path: {
                'chaptersId': chaptersId,
            },
        });
    }

    /**
     * @param booksId 
     * @returns any 
     * @throws ApiError
     */
    public static attachControllerFindAttachBasedOnBooks(
booksId: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attach/withBooks/{booksId}',
            path: {
                'booksId': booksId,
            },
        });
    }

}
