/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateStandardDto = {
    correctAnswer?: number;
    examNumber?: number;
    questionNumber?: number;
    time?: string;
    examType?: UpdateStandardDto.examType;
};

export namespace UpdateStandardDto {

    export enum examType {
        MULTIPLE_CHOICE_TEST = 'multipleChoiceTest',
        ESSAY_TEST = 'essayTest',
    }


}
