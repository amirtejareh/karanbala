/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateObjectiveTestManagementDto } from '../models/CreateObjectiveTestManagementDto';
import type { UpdateObjectiveTestManagementDto } from '../models/UpdateObjectiveTestManagementDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ObjectiveTestManagementService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestManagementControllerCreate(
requestBody: CreateObjectiveTestManagementDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/objectiveTestManagement',
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
    public static objectiveTestManagementControllerFindAll(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/objectiveTestManagement',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param objectiveTestId 
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestManagementControllerGetObjectiveTestsBasedNumber(
objectiveTestId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/objectiveTestManagement/withObjectiveTests/{objectiveTestId}',
            path: {
                'objectiveTestId': objectiveTestId,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestManagementControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/objectiveTestManagement/{id}',
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
    public static objectiveTestManagementControllerUpdate(
id: string,
requestBody: UpdateObjectiveTestManagementDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/objectiveTestManagement/{id}',
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
    public static objectiveTestManagementControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/objectiveTestManagement/{id}',
            path: {
                'id': id,
            },
        });
    }

}
