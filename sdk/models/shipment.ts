/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { advanced_shipment_options } from './advanced_shipment_options';
import type { date_time } from './date_time';
import type { delivery_confirmation } from './delivery_confirmation';
import type { insurance_provider } from './insurance_provider';
import type { _package } from './_package';
import type { partial_shipment } from './partial_shipment';
import type { se_id } from './se_id';
import type { shipment_status } from './shipment_status';
import type { shipping_address } from './shipping_address';
import type { shipping_address_to } from './shipping_address_to';
import type { tag } from './tag';
import type { weigth } from './weigth';
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
 * > **Note:** Either `ship_from` or `warehouse_id` must be set.
 *
 */
export type shipment = (partial_shipment & {
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id: se_id;
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
     * The recipient's mailing address
     */
    ship_to: shipping_address_to;
    /**
     * The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse].  Then you can simply specify the `warehouse_id` rather than the complete address each time.
     *
     */
    ship_from: shipping_address;
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
});

