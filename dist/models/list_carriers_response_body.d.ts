import type { carrier } from './carrier';
/**
 * A carrier list response body
 */
export type list_carriers_response_body = {
    /**
     * The carrier response body
     */
    readonly carriers: Array<carrier>;
};
