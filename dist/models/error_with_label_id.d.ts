import type { error_code } from './error_code';
import type { error_source } from './error_source';
import type { error_type } from './error_type';
import type { se_id } from './se_id';
/**
 * The error structure that gets returned with almost all failed API calls
 *
 */
export type error_with_label_id = {
    error_source: error_source;
    error_type: error_type;
    error_code: error_code;
    /**
     * An error message associated with the failed API call
     */
    readonly message: string;
    /**
     * The label this error is associated with if it is specific to a individual label.
     */
    readonly label_id?: se_id;
};
