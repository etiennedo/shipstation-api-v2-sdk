/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { optional_link } from './optional_link';
import type { url } from './url';
/**
 * A link to a related resource
 */
export type link = (optional_link & {
    /**
     * The URL of the linked resource, if any
     */
    href: url;
});

