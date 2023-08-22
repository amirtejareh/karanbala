/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectiveTest } from "./ObjectiveTest";

export type UpdateObjectiveTestManagementDto = {
    book?: Array<string>;
    objectiveTest?: ObjectiveTest;
    books: Array<string>;
    examType: UpdateObjectiveTestManagementDto.examType;
};

export namespace UpdateObjectiveTestManagementDto {
    export enum examType {
        MAIN = "main",
        REMEDIAL = "remedial",
    }
}
