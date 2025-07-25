import type { batch } from './batch';
import type { pagination_link } from './pagination_link';
/**
 * A list batch response body
 */
export type ListBatchesResponseBody = {
    /**
     * Batch List
     */
    readonly batches: Array<batch>;
    /**
     * The total number of batches the API call returned
     */
    readonly total: number;
    /**
     * The page that is currently being read
     */
    readonly page: number;
    /**
     * The total number of batch pages the API call returned
     */
    readonly pages: number;
    readonly links: pagination_link;
};
