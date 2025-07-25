import type { warehouse } from './warehouse';
/**
 * A warehouse list response body
 */
export type list_warehouses_response_body = {
    /**
     * The array of warehouses returned by the API call
     */
    readonly warehouses: Array<warehouse>;
};
