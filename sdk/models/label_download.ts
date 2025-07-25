/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { url } from './url';
/**
 * Reference to the various downloadable file formats for the generated label
 *
 */
export type label_download = {
    /**
     * The URL of the linked resource, if any
     */
    href?: url;
    /**
     * The URL for the pdf generated label
     */
    pdf?: url;
    /**
     * The URL for the png generated label
     */
    png?: url;
    /**
     * The URL for the zpl generated label
     */
    zpl?: url;
};

