/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { create_tag_response_body } from '../models/create_tag_response_body';
import type { list_tags_response_body } from '../models/list_tags_response_body';
import type { tag_name } from '../models/tag_name';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
    /**
     * Get tags
     * Get a list of all tags associated with an account.
     * @returns list_tags_response_body The request was a success.
     * @throws ApiError
     */
    public static listTags(): CancelablePromise<list_tags_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/tags',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create a new tag
     * Create a new Tag for customizing how you track your shipments
     * @param tagName
     * @returns create_tag_response_body The request was a success.
     * @throws ApiError
     */
    public static createTag(
        tagName: tag_name,
    ): CancelablePromise<create_tag_response_body> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/tags/{tag_name}',
            path: {
                'tag_name': tagName,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
