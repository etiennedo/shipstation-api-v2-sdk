/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The possible normalized reasons a label void request may not have been approved
 */
export enum label_void_failure_reason {
    UNKNOWN = 'unknown',
    UNSPECIFIED = 'unspecified',
    VALIDATION_FAILED = 'validation_failed',
    LABEL_NOT_FOUND_WITHIN_VOID_PERIOD = 'label_not_found_within_void_period',
    LABEL_ALREADY_USED = 'label_already_used',
    LABEL_ALREADY_VOIDED = 'label_already_voided',
    CONTACT_CARRIER = 'contact_carrier',
}
