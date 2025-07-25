import type { label_void_failure_reason } from './label_void_failure_reason';
/**
 * A void label response body
 */
export type void_label_response_body = {
    /**
     * Indicates whether the attempt to void the label was successful
     */
    readonly approved: boolean;
    readonly message: string;
    /**
     * Indicates a normalized reason for the conditions if the void attempt was not approved. Will not populate if approved is true. “unknown” codes may be specified later.
     */
    readonly reason_code?: label_void_failure_reason;
};
