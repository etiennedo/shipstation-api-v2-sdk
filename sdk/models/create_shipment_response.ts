/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_validation_result } from './address_validation_result';
import type { shipment } from './shipment';
/**
 * A single shipment creation response
 */
export type create_shipment_response = (shipment & {
    /**
     * An array of errors that occurred while creating the shipment.
     */
    readonly errors?: Array<string>;
    /**
     * The address validation result
     */
    address_validation?: address_validation_result;
});

