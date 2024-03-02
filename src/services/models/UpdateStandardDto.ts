/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateStandardDto = {
    gradeLevels?: Array<string>;
    books?: Array<string>;
    chapters?: Array<string>;
    /**
     * Chapter Or Term id
     */
    chapterTerm?: Record<string, any>;
    correctAnswer?: number;
    examNumber?: number;
    questionNumber?: number;
    examType?: UpdateStandardDto.examType;
};

export namespace UpdateStandardDto {

    export enum examType {
        MULTIPLE_CHOICE_TEST = 'multipleChoiceTest',
        ESSAY_TEST = 'essayTest',
    }


}
