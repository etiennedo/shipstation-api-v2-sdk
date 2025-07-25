import type { address_validating_shipment } from './address_validating_shipment';
import type { se_id } from './se_id';
/**
 * A rate shipment request body
 */
export type calculate_rates_request_body = ({
    /**
     * A string that uniquely identifies the shipment
     */
    shipment_id?: se_id;
} | {
    /**
     * The shipment object
     */
    shipment?: address_validating_shipment;
} | {
    /**
     * A string that uniquely identifies the shipment
     */
    shipment_id: se_id;
    /**
     * The shipment object
     */
    shipment: address_validating_shipment;
});
