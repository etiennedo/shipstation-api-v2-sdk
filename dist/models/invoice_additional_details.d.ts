import type { estimated_import_charges } from './estimated_import_charges';
import type { monetary_value } from './monetary_value';
/**
 * The additional information to put on commercial invoice
 *
 */
export type invoice_additional_details = {
    /**
     * Freight Charge for shipment.
     */
    freight_charge?: monetary_value;
    /**
     * Insurance Charge for shipment.
     */
    insurance_charge?: monetary_value;
    /**
     * Discount for shipment.
     */
    discount?: monetary_value;
    /**
     * Estimated import charges for commercial invoices for international shipments.
     */
    estimated_import_charges?: estimated_import_charges;
    /**
     * Other charge for shipment.
     */
    other_charge?: monetary_value;
    /**
     * Description for the other charge (if provided).
     */
    other_charge_description?: string;
};
