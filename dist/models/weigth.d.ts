import type { weight_unit } from './weight_unit';
/**
 * The weight of a package
 */
export type weigth = {
    /**
     * The weight, in the specified unit
     */
    value: number;
    /**
     * Weight unit
     */
    unit: weight_unit;
};
