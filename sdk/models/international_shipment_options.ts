/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { country_code } from './country_code';
import type { importer_of_records } from './importer_of_records';
import type { invoice_additional_details } from './invoice_additional_details';
import type { non_delivery } from './non_delivery';
import type { package_contents } from './package_contents';
import type { se_id } from './se_id';
import type { terms_of_trade_code } from './terms_of_trade_code';
import type { weight } from './weight';
/**
 * Options for international shipments, such as customs declarations.
 */
export type international_shipment_options = {
    /**
     * The type of contents in this shipment.  This may impact import duties or customs treatment.
     */
    contents: package_contents;
    /**
     * Explanation for contents (required if the `contents` is provided as `other`)
     */
    contents_explanation?: string;
    /**
     * Indicates what to do if a package is unable to be delivered.
     */
    non_delivery: non_delivery;
    /**
     * Specifies the supported terms of trade code (incoterms)
     */
    terms_of_trade_code?: terms_of_trade_code;
    /**
     * Declaration statement to be placed on the commercial invoice
     */
    declaration?: string;
    invoice_additional_details?: invoice_additional_details;
    importer_of_record?: importer_of_records;
    /**
     * Customs declarations for each item in the shipment. (Please provide this information under `products` inside `packages`)
     * @deprecated
     */
    customs_items?: Array<{
        /**
         * A string that uniquely identifies the customs item
         */
        readonly customs_item_id: se_id;
        /**
         * A description of the item
         */
        description?: string;
        /**
         * The quantity of this item in the shipment.
         */
        quantity?: number;
        /**
         * The monetary amount, in the specified currency.
         */
        value?: number;
        /**
         * The currencies that are supported by ShipStation are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html
         *
         */
        value_currency?: string;
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
         * The SKU (Stock Keeping Unit) of the customs item
         */
        sku?: string;
        /**
         * Description of the Custom Item's SKU
         */
        sku_description?: string;
    }>;
};

