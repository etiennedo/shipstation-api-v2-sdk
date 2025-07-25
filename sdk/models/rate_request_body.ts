/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { currency } from './currency';
import type { se_id } from './se_id';
/**
 * A rate request body
 */
export type rate_request_body = {
    /**
     * Array of carrier ids to get rates for
     */
    carrier_ids: Array<se_id>;
    package_types?: Array<string>;
    service_codes?: Array<string>;
    /**
     * Calculate the duties and tariffs for cross border shipments.
     */
    calculate_tax_amount?: boolean;
    preferred_currency?: currency;
    /**
     * Indicate if it's a return shipment
     */
    is_return?: boolean;
};

