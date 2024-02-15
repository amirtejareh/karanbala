/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';
import type { GradeLevel } from './GradeLevel';

export type CreateSampleTestQuestionsDto = {
    /**
     * Grade level id
     */
    gradeLevel: GradeLevel;
    /**
     * Book id
     */
    book: Book;
    /**
     * Chapter Or Term id
     */
    chapterTerm: Record<string, any>;
    /**
     * List of video object
     */
    videos: Array<string>;
    pdfFiles: Blob;
};
