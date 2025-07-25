/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { date_time } from './date_time';
import type { display_scheme } from './display_scheme';
import type { label_format } from './label_format';
import type { label_layout } from './label_layout';
import type { se_id } from './se_id';
/**
 * A create and process batch request body
 */
export type create_and_process_batch_request_body = {
    /**
     * A string that uniquely identifies the external batch
     */
    external_batch_id?: se_id;
    /**
     * Add custom messages for a particular batch
     */
    batch_notes?: string;
    /**
     * Array of shipment IDs used in the batch
     */
    shipment_ids?: Array<se_id>;
    /**
     * Array of rate IDs used in the batch
     */
    rate_ids?: Array<se_id>;
    /**
     * The information used to process the batch
     */
    process_labels?: {
        /**
         * When 'true', the batch will be enqueued for processing
         */
        create_batch_and_process_labels?: boolean;
        /**
         * The Ship date the batch is being processed for
         */
        ship_date?: date_time;
        label_layout?: label_layout;
        label_format?: label_format;
        /**
         * The display format that the label should be shown in.
         */
        display_scheme?: display_scheme;
    };
};

