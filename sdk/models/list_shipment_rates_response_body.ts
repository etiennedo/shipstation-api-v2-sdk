/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from './error';
import type { rate } from './rate';
import type { rate_response_status } from './rate_response_status';
import type { rates_information } from './rates_information';
import type { se_id } from './se_id';
/**
 * A list shipment rates response body
 */
export type list_shipment_rates_response_body = (rates_information & {
    /**
     * An array of shipment rates
     */
    readonly rates: Array<rate>;
    /**
     * An array of invalid shipment rates
     */
    readonly invalid_rates: Array<rate>;
    /**
     * A string that uniquely identifies the rate request
     */
    readonly rate_request_id: se_id;
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id: se_id;
    /**
     * When the rate was created
     */
    created_at: se_id;
    readonly status: rate_response_status;
    errors: Array<error>;
});

