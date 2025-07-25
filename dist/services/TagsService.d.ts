import type { create_tag_response_body } from '../models/create_tag_response_body';
import type { list_tags_response_body } from '../models/list_tags_response_body';
import type { tag_name } from '../models/tag_name';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TagsService {
    /**
     * Get tags
     * Get a list of all tags associated with an account.
     * @returns list_tags_response_body The request was a success.
     * @throws ApiError
     */
    static listTags(): CancelablePromise<list_tags_response_body>;
    /**
     * Create a new tag
     * Create a new Tag for customizing how you track your shipments
     * @param tagName
     * @returns create_tag_response_body The request was a success.
     * @throws ApiError
     */
    static createTag(tagName: tag_name): CancelablePromise<create_tag_response_body>;
}
