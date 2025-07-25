/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { date_time } from './date_time';
import type { display_scheme } from './display_scheme';
import type { label_format } from './label_format';
import type { label_layout } from './label_layout';
/**
 * A process batch request body
 */
export type process_batch_request_body = {
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

