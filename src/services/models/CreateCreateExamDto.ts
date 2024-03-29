/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Chapter } from './Chapter';
import type { TermOfStudy } from './TermOfStudy';

export type CreateCreateExamDto = {
    gradeLevels: Array<string>;
    books: Array<string>;
    /**
     * Chapter
     */
    chapter: Chapter;
    AnswerSheetSourcePdfFile: Blob;
    /**
     * Term
     */
    term: TermOfStudy;
    /**
     * the number of exam
     */
    number: string;
    type: CreateCreateExamDto.type;
    examType: CreateCreateExamDto.examType;
};

export namespace CreateCreateExamDto {

    export enum type {
        STANDARD = 'standard',
        SUBJECTIVE = 'subjective',
    }

    export enum examType {
        MULTIPLE_CHOICE_TEST = 'multipleChoiceTest',
        ESSAY_TEST = 'essayTest',
    }


}
