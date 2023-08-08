/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateObjectiveTestDto } from '../models/CreateObjectiveTestDto';
import type { UpdateObjectiveTestDto } from '../models/UpdateObjectiveTestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ObjectiveTestService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestControllerCreate(
requestBody: CreateObjectiveTestDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/objectiveTest',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/objectiveTest',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static objectiveTestControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/objectiveTest/{id}',
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
    public static objectiveTestControllerUpdate(
id: string,
requestBody: UpdateObjectiveTestDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/objectiveTest/{id}',
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
    public static objectiveTestControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/objectiveTest/{id}',
            path: {
                'id': id,
            },
        });
    }

}
