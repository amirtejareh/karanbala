/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReportStandardDto } from '../models/CreateReportStandardDto';
import type { UpdateReportStandardDto } from '../models/UpdateReportStandardDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportStandardExamService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static reportStandardControllerCreate(
requestBody: CreateReportStandardDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/report-standard',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static reportStandardControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-standard',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static reportStandardControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-standard/{id}',
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
    public static reportStandardControllerUpdate(
id: string,
requestBody: UpdateReportStandardDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/report-standard/{id}',
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
    public static reportStandardControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/report-standard/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param examId 
     * @param username 
     * @returns any 
     * @throws ApiError
     */
    public static reportStandardControllerFindStandardReportBasedOnExamId(
examId: string,
username: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-standard/withExams/{ExamId}',
            query: {
                'ExamId': examId,
                'username': username,
            },
        });
    }

}
