/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';
import type { GradeLevel } from './GradeLevel';

export type UpdateContentEducationalPricingDto = {
    /**
     * Grade level id
     */
    gradeLevel?: GradeLevel;
    /**
     * Book id
     */
    book?: Book;
    /**
     * Price
     */
    price?: number;
};
