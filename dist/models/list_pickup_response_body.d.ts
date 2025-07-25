import type { pagination_link } from './pagination_link';
import type { pickup } from './pickup';
/**
 * A list pickup response body
 */
export type list_pickup_response_body = {
    /**
     * An array of pickups associated with the user's account.
     */
    pickups: Array<pickup>;
    /**
     * The total number of pickups returned
     */
    readonly total: number;
    /**
     * Current page of the list pickups results
     */
    readonly page: number;
    /**
     * Total number of pages for list pickups results
     */
    readonly pages: number;
    /**
     * Helpful links to other pages of results
     */
    readonly links: pagination_link;
};
