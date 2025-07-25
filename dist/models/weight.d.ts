import type { weight_unit } from './weight_unit';
/**
 * The weight of a package
 */
export type weight = {
    /**
     * The weight, in the specified unit
     */
    value: number;
    /**
     * Weight unit
     */
    unit: weight_unit;
};
