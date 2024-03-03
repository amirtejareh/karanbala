/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Chapter } from './Chapter';
import type { TermOfStudy } from './TermOfStudy';

export type UpdateCreateExamDto = {
    gradeLevels?: Array<string>;
    books?: Array<string>;
    /**
     * Chapter
     */
    chapter?: Chapter;
    /**
     * Term
     */
    term?: TermOfStudy;
    /**
     * the number of exam
     */
    number?: string;
    type?: UpdateCreateExamDto.type;
};

export namespace UpdateCreateExamDto {

    export enum type {
        STANDARD = 'standard',
        SUBJECTIVE = 'subjective',
    }


}
