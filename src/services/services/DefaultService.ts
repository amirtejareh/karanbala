/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBookDto } from "../models/CreateBookDto";
import type { CreateFieldOfStudyDto } from "../models/CreateFieldOfStudyDto";
import type { CreateGradeLevelDto } from "../models/CreateGradeLevelDto";
import type { CreateTermOfStudyDto } from "../models/CreateTermOfStudyDto";
import type { CreateUserDto } from "../models/CreateUserDto";
import type { SigninUserDto } from "../models/SigninUserDto";
import type { UpdateBookDto } from "../models/UpdateBookDto";
import type { UpdateFieldOfStudyDto } from "../models/UpdateFieldOfStudyDto";
import type { UpdateGradeLevelDto } from "../models/UpdateGradeLevelDto";
import type { UpdateTermOfStudyDto } from "../models/UpdateTermOfStudyDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DefaultService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static appControllerMainRoute(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/users",
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerCreateUser(requestBody: CreateUserDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/auth/signup",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerSinginUser(requestBody: SigninUserDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/auth/signin",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerCreate(
        requestBody: CreateFieldOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/field-of-study",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/field-of-study",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/field-of-study/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerUpdate(
        id: string,
        requestBody: UpdateFieldOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/field-of-study/{id}",
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static fieldOfStudyControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/field-of-study/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerCreate(
        requestBody: CreateGradeLevelDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/grade-level",
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/grade-level",
        });
    }

    /**
     * @param filename
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerGetImage(filename: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/grade-level/image/{filename}",
            path: {
                filename: filename,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/grade-level/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerUpdate(
        id: string,
        requestBody: UpdateGradeLevelDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/grade-level/{id}",
            path: {
                id: id,
            },
            formData: requestBody,
            mediaType: "multipart/form-data",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static gradeLevelControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/grade-level/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerCreate(
        requestBody: CreateTermOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/term-of-study",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/term-of-study",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/term-of-study/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerUpdate(
        id: string,
        requestBody: UpdateTermOfStudyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/term-of-study/{id}",
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static termOfStudyControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/term-of-study/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bookControllerCreate(requestBody: CreateBookDto): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/book",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static bookControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookControllerFindOne(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/book/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bookControllerUpdate(
        id: string,
        requestBody: UpdateBookDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/book/{id}",
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static bookControllerRemove(id: string): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/book/{id}",
            path: {
                id: id,
            },
        });
    }
}
