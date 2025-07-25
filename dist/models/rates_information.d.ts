import type { error } from './error';
import type { rate } from './rate';
import type { rate_response_status } from './rate_response_status';
import type { se_id } from './se_id';
/**
 * A rates information resource
 */
export type rates_information = {
    /**
     * An array of shipment rates
     */
    readonly rates?: Array<rate>;
    /**
     * An array of invalid shipment rates
     */
    readonly invalid_rates?: Array<rate>;
    /**
     * A string that uniquely identifies the rate request
     */
    readonly rate_request_id?: se_id;
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id?: se_id;
    /**
     * When the rate was created
     */
    created_at?: se_id;
    readonly status?: rate_response_status;
    errors?: Array<error>;
};
