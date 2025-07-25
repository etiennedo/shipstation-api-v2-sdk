/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dimension_unit } from './dimension_unit';
/**
 * The dimensions of a package
 */
export type dimensions = {
    /**
     * Dimension unit
     */
    unit: dimension_unit;
    /**
     * The length of the package, in the specified unit
     */
    length: number;
    /**
     * The width of the package, in the specified unit
     */
    width: number;
    /**
     * The height of the package, in the specified unit
     */
    height: number;
};

