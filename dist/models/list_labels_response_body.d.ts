import type { label } from './label';
import type { paged_list_response_body } from './paged_list_response_body';
/**
 * A list label response body
 */
export type list_labels_response_body = (paged_list_response_body & {
    /**
     * The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the `page_size`.
     *
     */
    labels: Array<label>;
});
