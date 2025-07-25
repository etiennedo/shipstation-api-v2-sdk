import type { partial_shipment } from './partial_shipment';
import type { se_id } from './se_id';
import type { service_code } from './service_code';
import type { shipping_address } from './shipping_address';
import type { shipping_address_to } from './shipping_address_to';
import type { validate_address } from './validate_address';
/**
 * An address validating shipment
 */
export type address_validating_shipment = ({
    validate_address?: validate_address;
} & partial_shipment & {
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id: se_id;
    /**
     * The carrier account that is billed for the shipping charges
     */
    carrier_id: se_id;
    /**
     * The [carrier service] used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     *
     */
    service_code: service_code;
    /**
     * The recipient's mailing address
     */
    ship_to: shipping_address_to;
    /**
     * The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse].  Then you can simply specify the `warehouse_id` rather than the complete address each time.
     *
     */
    ship_from: shipping_address;
});
