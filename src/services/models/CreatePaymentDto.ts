/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Book } from './Book';

export type CreatePaymentDto = {
    /**
     * Amount of the Payment
     */
    amount: string;
    /**
     * Email of the Payment
     */
    email: string;
    /**
     * authority of the Payment
     */
    authority: number;
    /**
     * mobile of the user
     */
    mobile: number;
    /**
     * id of the user
     */
    userId: string;
    type: CreatePaymentDto.type;
    /**
     * Book id
     */
    book: Book;
};

export namespace CreatePaymentDto {

    export enum type {
        COMPREHENSIVE_TEST = 'comprehensive_test',
        QUIZ = 'quiz',
    }


}
