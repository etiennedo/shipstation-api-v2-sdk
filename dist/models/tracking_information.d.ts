import type { carrier_code } from './carrier_code';
import type { country_code } from './country_code';
import type { date_time } from './date_time';
import type { tracking_number } from './tracking_number';
import type { tracking_status_detail_code } from './tracking_status_detail_code';
/**
 * A tracking information resource
 */
export type tracking_information = {
    tracking_number?: tracking_number;
    /**
     * Carrier Tracking Url, if available
     */
    readonly tracking_url?: string;
    status_code?: tracking_status_detail_code;
    status_detail_code?: tracking_status_detail_code;
    carrier_code?: carrier_code;
    /**
     * The unique ID of the [carrier account] that was used to create this label
     *
     */
    readonly carrier_id?: number;
    /**
     * Status description
     */
    readonly status_description?: string;
    /**
     * Status detail description
     */
    readonly status_detail_description?: string;
    /**
     * Carrier status code
     */
    readonly carrier_status_code?: string;
    /**
     * Carrier detail code
     */
    readonly carrier_detail_code?: string;
    /**
     * carrier status description
     */
    readonly carrier_status_description?: string;
    ship_date?: date_time;
    estimated_delivery_date?: date_time;
    actual_delivery_date?: date_time;
    /**
     * Exception description
     */
    readonly exception_description?: string;
    /**
     * The events that have occured during the lifetime of this tracking number.
     */
    readonly events?: Array<{
        /**
         * Timestamp for carrier event
         */
        occurred_at: date_time;
        /**
         * Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.
         */
        carrier_occurred_at?: date_time;
        /**
         * Event description
         */
        readonly description?: string;
        /**
         * City locality
         */
        readonly city_locality: string;
        /**
         * State province
         */
        readonly state_province: string;
        /**
         * Postal code
         */
        readonly postal_code: string;
        country_code?: country_code;
        /**
         * Company Name
         */
        readonly company_name?: string;
        /**
         * Signer information
         */
        readonly signer?: string;
        /**
         * Event Code
         */
        event_code?: string;
        /**
         * Carrier detail code
         */
        readonly carrier_detail_code: string;
        status_code: tracking_status_detail_code;
        status_detail_code?: tracking_status_detail_code;
        /**
         * Event Status Description
         */
        readonly status_description: string;
        /**
         * Event Status Detail Description
         */
        readonly status_detail_description?: string;
        /**
         * Carrier status code
         */
        readonly carrier_status_code: string;
        /**
         * carrier status description
         */
        readonly carrier_status_description: string;
        /**
         * Latitude coordinate of tracking event.
         */
        latitude?: number;
        /**
         * Longitude coordinate of tracking event.
         */
        longitude?: number;
        /**
         * A URL to an image captured at the time of delivery, serving as evidence that the shipment was successfully delivered to the recipient. It can be used to capture things like recipient's signature, location of delivery, condition of the package upon delivery, etc.
         */
        readonly proof_of_delivery_url?: string;
    }>;
};
