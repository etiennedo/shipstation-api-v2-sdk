import type { advanced_shipment_options } from './advanced_shipment_options';
import type { date_type } from './date_type';
import type { date_time } from './date_time';
import type { delivery_confirmation } from './delivery_confirmation';
import type { insurance_provider } from './insurance_provider';
import type { international_shipment_options } from './international_shipment_options';
import type { monetary_value } from './monetary_value';
import type { order_source_name } from './order_source_name';
import type { _package } from './_package';
import type { se_id } from './se_id';
import type { service_code } from './service_code';
import type { shipment_item } from './shipment_item';
import type { shipment_status } from './shipment_status';
import type { shipping_address } from './shipping_address';
import type { shipping_address_to } from './shipping_address_to';
import type { tag } from './tag';
import type { tax_identifier } from './tax_identifier';
import type { weigth } from './weigth';
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
 */
export type partial_shipment = {
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id?: se_id;
    /**
     * The carrier account that is billed for the shipping charges
     */
    carrier_id?: se_id;
    /**
     * The [carrier service] used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     *
     */
    service_code?: service_code;
    /**
     * The requested shipment service
     */
    requested_shipment_service?: string;
    /**
     * ID of the shipping rule, which you want to use to automate carrier/carrier service selection for the shipment
     *
     */
    shipping_rule_id?: se_id;
    /**
     * ID that the Order Source assigned
     */
    external_order_id?: string;
    /**
     * Date to hold the shipment until
     */
    hold_until_date?: string;
    /**
     * Date by which the shipment should be shipped
     */
    ship_by_date?: string;
    /**
     * The retail rate for the shipment
     */
    retail_rate?: monetary_value;
    /**
     * The store ID associated with the shipment
     */
    store_id?: se_id;
    /**
     * Describe the packages included in this shipment as related to potential metadata that was imported from
     * external order sources
     *
     */
    items?: Array<shipment_item>;
    /**
     * Notes from the buyer
     */
    notes_from_buyer?: string;
    /**
     * Gift notes
     */
    notes_for_gift?: string;
    /**
     * Indicates if the shipment is a gift
     */
    is_gift?: boolean;
    /**
     * User assigned to the shipment
     */
    assigned_user?: string;
    /**
     * Total amount paid for the order
     */
    amount_paid?: monetary_value;
    /**
     * Amount paid for shipping
     */
    shipping_paid?: monetary_value;
    /**
     * Amount paid for taxes
     */
    tax_paid?: monetary_value;
    /**
     * Shipping zone
     */
    zone?: number;
    /**
     * Display scheme for the shipment
     */
    display_scheme?: string;
    tax_identifiers?: Array<tax_identifier>;
    /**
     * A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
     *
     * > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
     *
     */
    external_shipment_id?: string;
    /**
     * A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
     *
     * > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
     *
     */
    shipment_number?: string;
    /**
     * The date that the shipment was (or will be) shippped.  ShipStation will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     *
     */
    ship_date?: date_type;
    /**
     * The date and time that the shipment was created in ShipStation .
     */
    readonly created_at?: date_time;
    /**
     * The date and time that the shipment was created or last modified.
     */
    readonly modified_at?: date_time;
    /**
     * The current status of the shipment
     */
    readonly shipment_status?: shipment_status;
    /**
     * The recipient's mailing address
     */
    ship_to?: shipping_address_to;
    /**
     * The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse].  Then you can simply specify the `warehouse_id` rather than the complete address each time.
     *
     */
    ship_from?: shipping_address;
    /**
     * The [warehouse] that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
     *
     */
    warehouse_id?: se_id;
    /**
     * The return address for this shipment.  Defaults to the `ship_from` address.  Can be sent with a warehouse_id, in which case the return address can be overridden.  This allows you to have a different address printed on the label while maintaining the origin address.
     *
     */
    return_to?: shipping_address;
    /**
     * An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.
     *
     */
    is_return?: boolean;
    /**
     * The type of delivery confirmation that is required for this shipment
     */
    confirmation?: delivery_confirmation;
    /**
     * Customs information.  This is usually only needed for international shipments.
     *
     */
    customs?: international_shipment_options;
    /**
     * Advanced shipment options.  These are entirely optional.
     */
    advanced_options?: advanced_shipment_options;
    /**
     * The insurance provider to use for any insured packages in the shipment.
     *
     */
    insurance_provider?: insurance_provider;
    /**
     * Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags. Note: Tags require object structure with name property, not simple strings.
     *
     */
    tags?: Array<tag>;
    order_source_code?: order_source_name;
    /**
     * The packages in the shipment.
     *
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages?: Array<_package>;
    /**
     * The combined weight of all packages in the shipment
     */
    readonly total_weight?: weigth;
    /**
     * Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS.
     */
    comparison_rate_type?: string;
};
