import type { monetary_value } from './monetary_value';
import type { _package } from './_package';
import type { se_id } from './se_id';
import type { shipment_item } from './shipment_item';
import type { shipment_status } from './shipment_status';
import type { shipping_address } from './shipping_address';
import type { shipping_address_to } from './shipping_address_to';
import type { validate_address } from './validate_address';
/**
 * A single shipment creation request
 */
export type create_shipment_request = {
    /**
     * Address validation option
     */
    validate_address?: validate_address;
    /**
     * A unique user-defined key to identify a shipment. This can be used to retrieve the shipment.
     *
     */
    external_shipment_id?: string;
    /**
     * The carrier account that is billed for the shipping charges
     */
    carrier_id?: se_id;
    /**
     * Whether to create a sales order for this shipment
     */
    create_sales_order?: boolean;
    /**
     * The store ID associated with the shipment
     */
    store_id?: string;
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
     * Shipping zone
     */
    zone?: number;
    /**
     * Display scheme for the shipment
     */
    display_scheme?: string;
    /**
     * User assigned to the shipment
     */
    assigned_user?: string;
    /**
     * The status of the shipment
     */
    shipment_status?: shipment_status;
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
     * The recipient's mailing address
     */
    ship_to?: shipping_address_to;
    /**
     * The shipment's origin address
     */
    ship_from?: shipping_address;
    /**
     * Items included in this shipment
     */
    items?: Array<shipment_item>;
    /**
     * The packages in the shipment
     */
    packages?: Array<_package>;
};
