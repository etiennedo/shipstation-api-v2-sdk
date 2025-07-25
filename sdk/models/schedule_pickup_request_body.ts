/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { date_time } from './date_time';
import type { email } from './email';
import type { pickup } from './pickup';
import type { se_id } from './se_id';
/**
 * A schedule pickup request body
 */
export type schedule_pickup_request_body = (pickup & {
    /**
     * Label IDs that will be included in the pickup request
     */
    label_ids: Array<se_id>;
    contact_details: {
        name: string;
        email: email;
        /**
         * Phone number associated
         */
        phone: string;
    };
    /**
     * The desired time range for the package pickup.
     */
    pickup_window: {
        start_at: date_time;
        end_at: date_time;
    };
});

