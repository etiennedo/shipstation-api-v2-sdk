/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pagination_link } from './pagination_link';
import type { se_id } from './se_id';
/**
 * A batch errors response body
 */
export type list_batch_errors_response_body = {
    /**
     * The errors currently associated with the batch
     */
    readonly errors: Array<{
        /**
         * Error message associated with the shipment.
         */
        readonly error?: string;
        /**
         * A string that uniquely identifies the shipment
         */
        readonly shipment_id?: se_id;
        /**
         * An external shipment id associated with the shipment
         */
        readonly external_shipment_id?: string;
    }>;
    readonly links: pagination_link;
};

