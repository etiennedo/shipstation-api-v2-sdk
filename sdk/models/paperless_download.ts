/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { url } from './url';
/**
 * The paperless details which may contain elements like `href`, `instructions` and `handoff_code`.
 *
 */
export type paperless_download = {
    /**
     * The URL of the linked resource, if any
     */
    href?: url;
    /**
     * The instructions for the paperless download.
     *
     */
    instructions?: string;
    /**
     * The handoff code for the paperless download.
     *
     */
    handoff_code?: string;
};

