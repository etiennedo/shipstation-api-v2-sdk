/**
 * Many ShipStation endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.
 *
 */
export type paged_list_response_body = Record<string, any>;
