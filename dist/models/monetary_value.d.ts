import type { currency } from './currency';
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 */
export type monetary_value = {
    /**
     * Currency code
     */
    currency: currency;
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
};
