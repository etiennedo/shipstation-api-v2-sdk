/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { country_code } from './country_code';
import type { dangerous_goods } from './dangerous_goods';
import type { dimensions } from './dimensions';
import type { label_messages } from './label_messages';
import type { monetary_value } from './monetary_value';
import type { package_code } from './package_code';
import type { se_id } from './se_id';
import type { tracking_number } from './tracking_number';
import type { weight } from './weight';
/**
 * A package associated with a shipment
 *
 */
export type _package = {
    /**
     * A string that uniquely identifies this shipment package
     */
    readonly shipment_package_id?: se_id;
    /**
     * A string that uniquely identifies this [package type]
     */
    package_id?: se_id;
    /**
     * The [package type] such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     *
     */
    package_code?: package_code;
    /**
     * The name of the of the [package type]
     */
    package_name?: string;
    /**
     * The package weight
     */
    weight: weight;
    /**
     * The package dimensions
     */
    dimensions?: dimensions;
    /**
     * The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
     *
     */
    insured_value?: monetary_value;
    label_messages?: label_messages;
    /**
     * An external package id.
     */
    external_package_id?: string;
    /**
     * The tracking number for the package.  The format depends on the carrier.
     *
     */
    readonly tracking_number?: tracking_number;
    /**
     * A short description of the package content. Required for shipments moving to, from, and through Mexico.
     *
     */
    content_description?: string;
    /**
     * Details about products inside packages (Information provided would be used on custom documentation)
     */
    products?: Array<{
        /**
         * A description of the item
         */
        description?: string;
        /**
         * The quantity of this item in the shipment.
         */
        quantity?: number;
        /**
         * The declared value of each item
         */
        value?: monetary_value;
        /**
         * The item weight
         */
        weight?: weight;
        /**
         * The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
         */
        harmonized_tariff_code?: string;
        /**
         * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
         *
         */
        country_of_origin?: country_code;
        unit_of_measure?: string;
        /**
         * The SKU (Stock Keeping Unit) of the item
         */
        sku?: string;
        /**
         * Description of the Custom Item's SKU
         */
        sku_description?: string;
        /**
         * Manufacturers Identification code
         */
        mid_code?: string;
        /**
         * link to the item on the seller website
         */
        product_url?: string;
        /**
         * VAT rate applicable to the item
         */
        vat_rate?: number;
        /**
         * Details about dangerous goods inside products
         */
        dangerous_goods?: Array<dangerous_goods>;
    }>;
};

