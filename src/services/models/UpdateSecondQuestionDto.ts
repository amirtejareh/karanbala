/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComprehensiveTest } from './ComprehensiveTest';

export type UpdateSecondQuestionDto = {
    comprehensiveTestId?: ComprehensiveTest;
    questionNumber?: number;
    question?: string;
    options?: Array<string>;
    guideLine?: string;
};
