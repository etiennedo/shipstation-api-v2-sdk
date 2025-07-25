/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_validation_result } from './address_validation_result';
import type { partial_shipment } from './partial_shipment';
/**
 * A create and validate shipment resource
 */
export type create_and_validate_shipment = (partial_shipment & {
    /**
     * An array of errors that occurred while creating shipment.
     * @deprecated
     */
    readonly errors?: Array<string>;
    /**
     * The address validation
     */
    address_validation?: address_validation_result;
});

