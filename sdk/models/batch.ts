/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { batch_status } from './batch_status';
import type { date_time } from './date_time';
import type { error } from './error';
import type { label_download } from './label_download';
import type { label_format } from './label_format';
import type { label_layout } from './label_layout';
import type { optional_link } from './optional_link';
import type { paperless_download } from './paperless_download';
import type { se_id } from './se_id';
/**
 * Batches are an advanced feature of ShipStation designed for users who need to generate hundreds or
 * thousands of labels at a time.
 *
 */
export type batch = {
    /**
     * label layout
     */
    readonly label_layout: label_layout;
    readonly label_format: label_format;
    /**
     * A string that uniquely identifies the batch
     */
    readonly batch_id: se_id;
    /**
     * The batch number.
     */
    readonly batch_number: string;
    /**
     * A string that uniquely identifies the external batch
     */
    readonly external_batch_id: string;
    /**
     * Custom notes you can add for each created batch
     */
    readonly batch_notes: string;
    /**
     * The date and time the batch was created in ShipStation
     */
    readonly created_at: date_time;
    /**
     * The date and time the batch was processed in ShipStation
     */
    readonly processed_at: date_time;
    /**
     * The number of errors that occurred while generating the batch
     */
    readonly errors: number;
    /**
     * The errors associated with the failed API call
     */
    readonly process_errors: Array<error>;
    /**
     * The number of warnings that occurred while generating the batch
     */
    readonly warnings: number;
    /**
     * The number of labels generated in the batch
     */
    readonly completed: number;
    /**
     * The number of forms for customs that are available for download
     */
    readonly forms: number;
    /**
     * The total of errors, warnings, and completed properties
     */
    readonly count: number;
    /**
     * The batch shipments endpoint
     */
    batch_shipments_url: optional_link;
    /**
     * Link to batch labels query
     */
    batch_labels_url: optional_link;
    /**
     * Link to batch errors endpoint
     */
    readonly batch_errors_url: optional_link;
    /**
     * The label download for the batch
     */
    readonly label_download: label_download;
    /**
     * The form download for any customs that are needed
     */
    readonly form_download: optional_link;
    /**
     * The paperless details which may contain elements like `href`, `instructions` and `handoff_code`.
     */
    readonly paperless_download: paperless_download;
    readonly status: batch_status;
};

