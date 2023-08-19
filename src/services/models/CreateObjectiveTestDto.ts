/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateObjectiveTestDto = {
    gradeLevels: Array<string>;
    books: Array<string>;
    chapters: Array<string>;
    sections: Array<string>;
    subjects: Array<string>;
    questionDifficulty: CreateObjectiveTestDto.questionDifficulty;
    questionType: CreateObjectiveTestDto.questionType;
    question: Array<string>;
    correctAnswer: number;
    examNumber: number;
    questionNumber: number;
    examType: CreateObjectiveTestDto.examType;
};

export namespace CreateObjectiveTestDto {
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

    export enum examType {
        MAIN = "main",
        REMEDIAL = "remedial",
    }
}
