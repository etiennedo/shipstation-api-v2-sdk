import type { display_scheme } from './display_scheme';
import type { label_download_type } from './label_download_type';
import type { label_format } from './label_format';
import type { label_layout } from './label_layout';
import type { validate_address } from './validate_address';
/**
 * A purchase label without shipment resource
 */
export type purchase_label_without_shipment = {
    validate_address?: validate_address;
    label_layout?: label_layout;
    label_format?: label_format;
    label_download_type?: label_download_type;
    /**
     * The display format that the label should be shown in.
     */
    display_scheme?: display_scheme;
};
