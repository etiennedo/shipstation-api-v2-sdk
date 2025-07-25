import type { manifest } from './manifest';
import type { pagination_link } from './pagination_link';
/**
 * A list manifests response body
 */
export type list_manifests_response_body = {
    /**
     * The list of available manifests
     */
    readonly manifests: Array<manifest>;
    /**
     * The total number of manifests returned
     */
    readonly total: number;
    /**
     * Current page of the list manifests results
     */
    readonly page: number;
    /**
     * Total number of pages for list manifests results
     */
    readonly pages: number;
    /**
     * Helpful links to other pages of results
     */
    readonly links: pagination_link;
};
