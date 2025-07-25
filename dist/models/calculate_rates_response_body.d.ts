import type { advanced_shipment_options } from './advanced_shipment_options';
import type { date_type } from './date_type';
import type { date_time } from './date_time';
import type { delivery_confirmation } from './delivery_confirmation';
import type { insurance_provider } from './insurance_provider';
import type { international_shipment_options } from './international_shipment_options';
import type { _package } from './_package';
import type { partial_shipment } from './partial_shipment';
import type { rates_information } from './rates_information';
import type { se_id } from './se_id';
import type { shipment_status } from './shipment_status';
import type { shipping_address } from './shipping_address';
import type { tag } from './tag';
import type { weigth } from './weigth';
/**
 * A rate shipment response body
 */
export type calculate_rates_response_body = (partial_shipment & {
    /**
     * The rates response
     */
    rate_response?: rates_information;
} & {
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id: se_id;
    /**
     * The date that the shipment was (or will be) shippped.  ShipStation will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     *
     */
    ship_date: date_type;
    /**
     * The date and time that the shipment was created in ShipStation .
     */
    readonly created_at: date_time;
    /**
     * The date and time that the shipment was created or last modified.
     */
    readonly modified_at: date_time;
    /**
     * The current status of the shipment
     */
    readonly shipment_status: shipment_status;
    /**
     * The return address for this shipment.  Defaults to the `ship_from` address.  Can be sent with a warehouse_id, in which case the return address can be overridden.  This allows you to have a different address printed on the label while maintaining the origin address.
     *
     */
    return_to: shipping_address;
    /**
     * The type of delivery confirmation that is required for this shipment
     */
    confirmation: delivery_confirmation;
    /**
     * Customs information.  This is usually only needed for international shipments.
     *
     */
    customs: international_shipment_options;
    /**
     * Advanced shipment options.  These are entirely optional.
     */
    advanced_options: advanced_shipment_options;
    /**
     * The insurance provider to use for any insured packages in the shipment.
     *
     */
    insurance_provider: insurance_provider;
    /**
     * Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags. Note: Tags require object structure with name property, not simple strings.
     *
     */
    tags: Array<tag>;
    /**
     * The packages in the shipment.
     *
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages: Array<_package>;
    /**
     * The combined weight of all packages in the shipment
     */
    readonly total_weight: weigth;
    /**
     * The rates response
     */
    rate_response: rates_information;
});
