/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserDto = {
    /**
     * Username of the user
     */
    username?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Password of the user
     */
    password?: string;
    /**
     * Mobile of the user
     */
    mobile?: string;
    /**
     * National Id Number of the user
     */
    national_id_number?: string;
    /**
     * Gender of the individual
     */
    gender?: UpdateUserDto.gender;
    familyName?: string;
    slogan?: string;
    firstName?: string;
    birthday?: string;
    fathersName?: string;
    phone?: string;
    parentsPhone?: string;
};

export namespace UpdateUserDto {

    /**
     * Gender of the individual
     */
    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }


}
