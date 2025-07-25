import type { address } from './address';
import type { date_time } from './date_time';
import type { email } from './email';
import type { pickup_resource_id } from './pickup_resource_id';
import type { se_id } from './se_id';
/**
 * The information necessary to schedule a package pickup
 *
 */
export type pickup = {
    readonly pickup_id?: pickup_resource_id;
    /**
     * Label IDs that will be included in the pickup request
     */
    label_ids?: Array<se_id>;
    /**
     * The date and time that the pickup was created in ShipStation .
     */
    readonly created_at?: date_time;
    /**
     * The date and time that the pickup was cancelled in ShipStation .
     */
    readonly cancelled_at?: date_time;
    /**
     * The carrier_id associated with the pickup
     */
    readonly carrier_id?: se_id;
    /**
     * The carrier confirmation number for the scheduled pickup.
     */
    readonly confirmation_number?: string;
    /**
     * The warehouse_id associated with the pickup
     */
    readonly warehouse_id?: se_id;
    readonly pickup_address?: address;
    contact_details?: {
        name: string;
        email: email;
        /**
         * Phone number associated
         */
        phone: string;
    };
    /**
     * Used by some carriers to give special instructions for a package pickup
     */
    pickup_notes?: string;
    /**
     * The desired time range for the package pickup.
     */
    pickup_window?: {
        start_at: date_time;
        end_at: date_time;
    };
    /**
     * An array of available pickup windows. Carriers can return multiple times that they will pickup packages.
     *
     */
    readonly pickup_windows?: Array<{
        start_at?: date_time;
        end_at?: date_time;
    }>;
};
