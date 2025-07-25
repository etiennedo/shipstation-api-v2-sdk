"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TagsService {
    /**
     * Get tags
     * Get a list of all tags associated with an account.
     * @returns list_tags_response_body The request was a success.
     * @throws ApiError
     */
    static listTags() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTag(tagName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TagsService = TagsService;
