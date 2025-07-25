import type { link } from './link';
import type { optional_link } from './optional_link';
/**
 * Helpful links to other pages of results
 */
export type pagination_link = {
    /**
     * The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
     *
     */
    first: link;
    /**
     * The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
     *
     */
    last: link;
    /**
     * The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
     *
     */
    prev: optional_link;
    /**
     * The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
     *
     */
    next: optional_link;
};
