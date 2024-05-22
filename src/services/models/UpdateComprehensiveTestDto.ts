/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';
import type { Chapter } from './Chapter';
import type { GradeLevel } from './GradeLevel';

export type UpdateComprehensiveTestDto = {
    /**
     * Grade level id
     */
    gradeLevel?: GradeLevel;
    /**
     * Book id
     */
    book?: Book;
    /**
     * Chapter id
     */
    chapter?: Chapter;
};
