/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bill_to_party } from './bill_to_party';
import type { collect_on_delivery_payment_type } from './collect_on_delivery_payment_type';
import type { country_code } from './country_code';
import type { currency } from './currency';
import type { origin_type } from './origin_type';
import type { weight } from './weight';
/**
 * Advanced shipment options
 */
export type advanced_shipment_options = {
    /**
     * This field is used to [bill shipping costs to a third party].  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
     *
     */
    bill_to_account?: string;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
     *
     */
    bill_to_country_code?: country_code;
    /**
     * Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
     *
     */
    bill_to_party?: bill_to_party;
    /**
     * The postal code of the third-party that is responsible for shipping costs.
     *
     */
    bill_to_postal_code?: string;
    /**
     * Indicates that the shipment contains alcohol.
     */
    contains_alcohol?: boolean;
    /**
     * Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
     *
     */
    delivered_duty_paid?: boolean;
    /**
     * Indicates if the shipment contain dry ice
     */
    dry_ice?: boolean;
    /**
     * The weight of the dry ice in the shipment
     */
    dry_ice_weight?: weight;
    /**
     * Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
     *
     */
    non_machinable?: boolean;
    /**
     * Enables Saturday delivery, if supported by the carrier.
     */
    saturday_delivery?: boolean;
    /**
     * Provide details for the Fedex freight service
     */
    fedex_freight?: {
        shipper_load_and_count?: string;
        booking_confirmation?: string;
    };
    /**
     * Whether to use [UPS Ground Freight pricing] If enabled, then a `freight_class` must also be specified.
     *
     */
    use_ups_ground_freight_pricing?: boolean;
    /**
     * The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
     *
     */
    freight_class?: string;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     */
    custom_field1?: string;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     */
    custom_field2?: string;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     */
    custom_field3?: string;
    origin_type?: origin_type;
    /**
     * Indicate to the carrier that this shipment requires additional handling.
     *
     */
    additional_handling?: boolean;
    shipper_release?: boolean;
    /**
     * Defer payment until package is delivered, instead of when it is ordered.
     */
    collect_on_delivery?: {
        payment_type?: collect_on_delivery_payment_type;
        payment_amount?: {
            currency?: currency;
            amount?: number;
        };
    };
    /**
     * Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached
     */
    third_party_consignee?: boolean;
    /**
     * Indicates if the Dangerous goods are present in the shipment
     */
    dangerous_goods?: boolean;
    /**
     * Contact information for Dangerous goods
     */
    dangerous_goods_contact?: {
        /**
         * Name of the contact
         */
        name?: string;
        /**
         * Phone number of the contact
         */
        phone?: string;
    };
    /**
     * The Windsor framework is a new regulation in the UK that simplifies customs procedures for goods moved from the UK mainland to Northern Ireland.
     */
    windsor_framework_details?: {
        /**
         * An indicator that will tell the carrier and HMRC the type of movement for the shipment.
         */
        movement_indicator?: advanced_shipment_options.movement_indicator;
        /**
         * An indicator that allows a shipper to declare the shipment as not-at-risk.
         */
        not_at_risk?: boolean;
    };
    /**
     * Ancillary endorsements option for the shipment
     */
    ancillary_endorsements_option?: string;
    /**
     * Number of return pickup attempts
     */
    return_pickup_attempts?: number;
    /**
     * Indicates if own document upload is enabled
     */
    own_document_upload?: boolean;
    /**
     * Indicates if the shipment contains limited quantities
     */
    limited_quantity?: boolean;
    /**
     * Indicates if event notifications are enabled
     */
    event_notification?: boolean;
};
export namespace advanced_shipment_options {
    /**
     * An indicator that will tell the carrier and HMRC the type of movement for the shipment.
     */
    export enum movement_indicator {
        C2C = 'c2c',
        B2C = 'b2c',
        C2B = 'c2b',
        B2B = 'b2b',
    }
}

