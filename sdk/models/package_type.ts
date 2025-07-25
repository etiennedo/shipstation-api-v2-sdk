/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dimensions } from './dimensions';
import type { package_code } from './package_code';
import type { se_id } from './se_id';
/**
 * A package type that a carrier supports for shipment.
 */
export type package_type = {
    /**
     * A string that uniquely identifies the package.
     */
    package_id?: se_id;
    package_code: package_code;
    name: string;
    /**
     * The custom dimensions for the package.
     */
    dimensions?: dimensions;
    /**
     * Provides a helpful description for the custom package.
     */
    description?: string;
};

