/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradeLevel } from './GradeLevel';

export type UpdatePaymentDto = {
    /**
     * Amount of the Payment
     */
    amount?: string;
    /**
     * Email of the Payment
     */
    email?: string;
    /**
     * authority of the Payment
     */
    authority?: number;
    /**
     * mobile of the user
     */
    mobile?: number;
    type?: UpdatePaymentDto.type;
    /**
     * Grade level id
     */
    gradeLevel?: GradeLevel;
};

export namespace UpdatePaymentDto {

    export enum type {
        COMPREHENSIVE_TEST = 'comprehensive_test',
        QUIZ = 'quiz',
    }


}
