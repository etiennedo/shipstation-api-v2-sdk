/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { create_shipment_response } from './create_shipment_response';
/**
 * A create shipments response body
 */
export type create_shipments_response_body = {
    /**
     * Indicates if any shipments had errors during creation
     */
    readonly has_errors: boolean;
    /**
     * Array of created shipments with their results
     */
    readonly shipments: Array<create_shipment_response>;
};

