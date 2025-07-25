import type { error_code } from './error_code';
import type { error_source } from './error_source';
import type { error_type } from './error_type';
/**
 * The error structure that gets returned with almost all failed API calls
 *
 */
export type error = {
    error_source: error_source;
    error_type: error_type;
    error_code: error_code;
    /**
     * An error message associated with the failed API call
     */
    readonly message: string;
};
