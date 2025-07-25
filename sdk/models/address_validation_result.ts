/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { address_validation_code } from './address_validation_code';
import type { address_validation_detail_code } from './address_validation_detail_code';
import type { address_validation_message_type } from './address_validation_message_type';
import type { address_validation_status } from './address_validation_status';
/**
 * An address validation result
 */
export type address_validation_result = {
    status: address_validation_status;
    /**
     * The original address that was sent for validation
     */
    original_address: address;
    /**
     * The matched address found by the ShipStation API
     */
    readonly matched_address: address;
    /**
     * The list of messages that were generated during the address validation request.
     */
    readonly messages: Array<{
        readonly code: address_validation_code;
        /**
         * Message explaining the address validation error
         */
        readonly message: string;
        readonly type: address_validation_message_type;
        detail_code: address_validation_detail_code;
    }>;
};

