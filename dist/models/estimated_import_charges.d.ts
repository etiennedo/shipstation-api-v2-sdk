import type { monetary_value } from './monetary_value';
/**
 * Estimated import charges for commercial invoices for international shipments.
 *
 */
export type estimated_import_charges = {
    /**
     * Estimated import taxes.
     */
    taxes?: monetary_value;
    /**
     * Estimated import duties.
     */
    duties?: monetary_value;
};
