/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateQuestionDto = {
    gradeLevels: Array<string>;
    books: Array<string>;
    chapters: Array<string>;
    sections: Array<string>;
    subjects: Array<string>;
    questionDifficulty: CreateQuestionDto.questionDifficulty;
    questionType: CreateQuestionDto.questionType;
    question: string;
    correctAnswer: number;
    number: number;
};

export namespace CreateQuestionDto {
    export enum questionDifficulty {
        EASY = "easy",
        AVERAGE = "average",
        HARD = "hard",
    }

    export enum questionType {
        CONCEPTIONAL = "conceptional",
        COMPUTATIONAL = "computational",
        TRICK = "trick",
        MEMORIZATIONAL = "memorizational",
        CHALLENGING = "challenging",
    }
}
