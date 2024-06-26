/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateContentEducationalPricingDto } from '../models/CreateContentEducationalPricingDto';
import type { UpdateContentEducationalPricingDto } from '../models/UpdateContentEducationalPricingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContentEducationalPricingService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static contentEducationalPricingControllerCreate(
requestBody: CreateContentEducationalPricingDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/content-educational-pricing',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static contentEducationalPricingControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/content-educational-pricing',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static contentEducationalPricingControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/content-educational-pricing/{id}',
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
    public static contentEducationalPricingControllerUpdate(
id: string,
requestBody: UpdateContentEducationalPricingDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/content-educational-pricing/{id}',
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
    public static contentEducationalPricingControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/content-educational-pricing/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param bookId 
     * @param gradeLevelId 
     * @param type 
     * @returns any 
     * @throws ApiError
     */
    public static contentEducationalPricingControllerFindPriceBasedOnBookAndGradeLevelAndType(
bookId: string,
gradeLevelId: string,
type: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/content-educational-pricing/withBooks/{BookId}',
            query: {
                'bookId': bookId,
                'gradeLevelId': gradeLevelId,
                'type': type,
            },
        });
    }

}
