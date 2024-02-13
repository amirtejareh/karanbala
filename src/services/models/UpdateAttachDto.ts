/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';
import type { Chapter } from './Chapter';
import type { GradeLevel } from './GradeLevel';

export type UpdateAttachDto = {
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
    /**
     * List of video object
     */
    videos?: Array<string>;
    pdfFiles?: Blob;
};
