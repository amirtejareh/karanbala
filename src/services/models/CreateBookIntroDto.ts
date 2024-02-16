/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from "./Book";
import type { GradeLevel } from "./GradeLevel";

export type CreateBookIntroDto = {
    /**
     * Grade level id
     */
    gradeLevel: GradeLevel;
    /**
     * Book id
     */
    book: Book;
    /**
     * type
     */
    type: Array<string>;
    /**
     * List of video object
     */
    videos: Array<string>;
    pdfFiles: Blob;
};
