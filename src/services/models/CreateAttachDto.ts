/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';
import type { Chapter } from './Chapter';
import type { GradeLevel } from './GradeLevel';
import type { Section } from './Section';
import type { Subject } from './Subject';

export type CreateAttachDto = {
    /**
     * Grade level id
     */
    gradeLevel: GradeLevel;
    /**
     * Book id
     */
    book: Book;
    /**
     * Chapter id
     */
    chapter: Chapter;
    /**
     * Section id
     */
    section: Section;
    /**
     * Subject id
     */
    subject: Subject;
    /**
     * List of video object
     */
    videos: Array<string>;
    pdfFiles: Blob;
};
