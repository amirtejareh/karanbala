/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateSubjectiveDto = {
    correctAnswer?: number;
    examNumber?: number;
    questionNumber?: number;
    examType?: UpdateSubjectiveDto.examType;
};

export namespace UpdateSubjectiveDto {

    export enum examType {
        MULTIPLE_CHOICE_TEST = 'multipleChoiceTest',
        ESSAY_TEST = 'essayTest',
    }


}
