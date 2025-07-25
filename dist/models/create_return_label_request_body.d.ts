import type { display_scheme } from './display_scheme';
import type { image_id } from './image_id';
import type { label_charge_event } from './label_charge_event';
import type { label_download_type } from './label_download_type';
import type { label_format } from './label_format';
import type { label_layout } from './label_layout';
/**
 * A create return label request body
 */
export type create_return_label_request_body = {
    /**
     * The label charge event.
     *
     */
    charge_event?: label_charge_event;
    /**
     * The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
     *
     */
    label_layout?: label_layout;
    /**
     * The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
     *
     */
    label_format?: label_format;
    label_download_type?: label_download_type;
    /**
     * The display format that the label should be shown in.
     */
    display_scheme?: display_scheme;
    /**
     * The label image resource that was used to create a custom label image.
     */
    label_image_id?: image_id;
};
