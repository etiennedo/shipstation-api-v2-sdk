/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { se_id } from './se_id';
/**
 * A rate estimate request body
 */
export type estimate_rates_request_body = ({
    /**
     * A string that uniquely identifies the carrier
     * @deprecated
     */
    carrier_id?: se_id;
} | {
    /**
     * Array of Carrier Ids
     */
    carrier_ids?: Array<se_id>;
});

