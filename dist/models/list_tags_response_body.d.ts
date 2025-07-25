import type { tag } from './tag';
/**
 * Response body from a successful GET /tags API call
 */
export type list_tags_response_body = {
    /**
     * The array of tags returned by the API call
     */
    tags?: Array<tag>;
};
