/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from './error';
import type { uuid } from './uuid';
/**
 * An error response body
 */
export type error_response_body = {
    /**
     * A UUID that uniquely identifies the request id.
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    request_id: uuid;
    /**
     * The errors associated with the failed API call
     */
    readonly errors: Array<error>;
};

