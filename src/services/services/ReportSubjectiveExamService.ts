/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReportSubjectiveDto } from '../models/CreateReportSubjectiveDto';
import type { UpdateReportSubjectiveDto } from '../models/UpdateReportSubjectiveDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportSubjectiveExamService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static reportSubjectiveControllerCreate(
requestBody: CreateReportSubjectiveDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/report-subjective',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static reportSubjectiveControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-subjective',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static reportSubjectiveControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-subjective/{id}',
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
    public static reportSubjectiveControllerUpdate(
id: string,
requestBody: UpdateReportSubjectiveDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/report-subjective/{id}',
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
    public static reportSubjectiveControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/report-subjective/{id}',
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
    public static reportSubjectiveControllerFindSubjectiveReportBasedOnExamId(
examId: string,
username: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-subjective/withExams/{ExamId}',
            query: {
                'ExamId': examId,
                'username': username,
            },
        });
    }

}
