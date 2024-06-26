/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static paymentControllerCreate(
requestBody: CreatePaymentDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static paymentControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment',
        });
    }

    /**
     * @param authorityId 
     * @returns any 
     * @throws ApiError
     */
    public static paymentControllerGetPaymentStatus(
authorityId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/withAuthority/{authorityId}',
            path: {
                'authorityId': authorityId,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static paymentControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/{id}',
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
    public static paymentControllerUpdate(
id: string,
requestBody: UpdatePaymentDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/payment/{id}',
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
    public static paymentControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
        });
    }

}
