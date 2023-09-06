/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateObjectiveTestDto = {
    gradeLevels?: Array<string>;
    books?: Array<string>;
    chapters?: Array<string>;
    sections?: Array<string>;
    subjects?: Array<string>;
    questionDifficulty?: UpdateObjectiveTestDto.questionDifficulty;
    questionType?: UpdateObjectiveTestDto.questionType;
    question?: Array<string>;
    correctAnswer?: number;
    examNumber?: number;
    questionNumber?: number;
    examType?: UpdateObjectiveTestDto.examType;
};

export namespace UpdateObjectiveTestDto {

    export enum questionDifficulty {
        EASY = 'easy',
        AVERAGE = 'average',
        HARD = 'hard',
        CHALLENGING = 'challenging',
    }

    export enum questionType {
        CONCEPTIONAL = 'conceptional',
        COMPUTATIONAL = 'computational',
        TRICK = 'trick',
        MEMORIZATIONAL = 'memorizational',
    }

    export enum examType {
        MAIN = 'main',
        REMEDIAL = 'remedial',
    }


}
