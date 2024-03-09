/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateSubjectiveDto = {
    correctAnswer: number;
    examNumber: number;
    questionNumber: number;
    examType: CreateSubjectiveDto.examType;
};

export namespace CreateSubjectiveDto {

    export enum examType {
        MULTIPLE_CHOICE_TEST = 'multipleChoiceTest',
        ESSAY_TEST = 'essayTest',
    }


}
