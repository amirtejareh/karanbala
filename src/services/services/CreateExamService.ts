/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCreateExamDto } from '../models/CreateCreateExamDto';
import type { UpdateCreateExamDto } from '../models/UpdateCreateExamDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CreateExamService {

    /**
     * @param formData 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerCreate(
formData: CreateCreateExamDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create-exam',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAll(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAllCreateExamsBasedOnStandardExam(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withStandardExam',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindAllCreateExamsBasedOnSubjectiveExam(
page: number,
limit: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withSubjectiveExam',
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
    public static createExamControllerFindCreateExamsBasedOnBooks(
page: number,
limit: number,
bookId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/withBooks/{BookId}',
            query: {
                'page': page,
                'limit': limit,
                'BookId': bookId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param chapterId 
     * @param examTypeId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateStandardExamsBasedOnChaptersAndExamTypes(
page: number,
limit: number,
chapterId: string,
examTypeId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/standard/withChapters/{ChapterId}/withExamType/{ExamTypeId}',
            query: {
                'page': page,
                'limit': limit,
                'ChapterId': chapterId,
                'ExamTypeId': examTypeId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param termId 
     * @param examTypeId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateStandardExamsBasedOnTermsAndExamTypes(
page: number,
limit: number,
termId: string,
examTypeId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/standard/withTerms/{TermId}/withExamType/{ExamTypeId}',
            query: {
                'page': page,
                'limit': limit,
                'TermId': termId,
                'ExamTypeId': examTypeId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param chapterId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateStandardExamsBasedOnChapters(
page: number,
limit: number,
chapterId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/standard/withChapters/{ChapterId}',
            query: {
                'page': page,
                'limit': limit,
                'ChapterId': chapterId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param termId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateStandardExamsBasedOnTerms(
page: number,
limit: number,
termId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/standard/withTerms/{TermId}',
            query: {
                'page': page,
                'limit': limit,
                'TermId': termId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param subjectId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateSubjectiveExamsBasedOnSubjects(
page: number,
limit: number,
subjectId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/subjective/withSubject/{SubjectId}',
            query: {
                'page': page,
                'limit': limit,
                'SubjectId': subjectId,
            },
        });
    }

    /**
     * @param page 
     * @param limit 
     * @param subjectId 
     * @param examLevelId 
     * @param examTypeId 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindCreateSubjectiveExamsBasedOnSubjectsExamLevelAndExamType(
page: number,
limit: number,
subjectId: string,
examLevelId: string,
examTypeId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/subjective/withSubject/{SubjectId}/withExamLevel/{ExamLevelId}/{withExamType}/{ExamTypeId}',
            query: {
                'page': page,
                'limit': limit,
                'SubjectId': subjectId,
                'ExamLevelId': examLevelId,
                'ExamTypeId': examTypeId,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static createExamControllerFindOne(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/create-exam/{id}',
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
    public static createExamControllerUpdate(
id: string,
formData: UpdateCreateExamDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/create-exam/{id}',
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
    public static createExamControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/create-exam/{id}',
            path: {
                'id': id,
            },
        });
    }

}
