/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { carrier_advanced_option } from './carrier_advanced_option';
import type { carrier_code } from './carrier_code';
import type { package_type } from './package_type';
import type { se_id } from './se_id';
import type { service } from './service';
/**
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 *
 */
export type carrier = {
    /**
     * A string that uniquely identifies the carrier.
     */
    readonly carrier_id?: se_id;
    /**
     * The [shipping carrier] who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
     *
     */
    readonly carrier_code?: carrier_code;
    /**
     * The account number that the carrier is connected to.
     */
    readonly account_number?: string;
    /**
     * Indicates whether the carrier requires funding to use its services
     */
    readonly requires_funded_amount?: boolean;
    /**
     * Current available balance
     */
    readonly balance?: number;
    /**
     * Nickname given to the account when initially setting up the carrier.
     */
    readonly nickname?: string;
    /**
     * Screen readable name
     */
    readonly friendly_name?: string;
    /**
     * Funding source ID for the carrier
     */
    readonly funding_source_id?: se_id;
    /**
     * Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
     */
    readonly primary?: boolean;
    /**
     * Carrier supports multiple packages per shipment
     */
    readonly has_multi_package_supporting_services?: boolean;
    /**
     * The carrier supports adding custom label messages to an order.
     */
    readonly supports_label_messages?: boolean;
    /**
     * The carrier is disabled by the current ShipStation account's billing plan.
     */
    readonly disabled_by_billing_plan?: boolean;
    /**
     * A list of services that are offered by the carrier
     */
    readonly services?: Array<service>;
    /**
     * A list of package types that are supported by the carrier
     */
    readonly packages?: Array<package_type>;
    /**
     * A list of options that are available to that carrier
     */
    readonly options?: Array<carrier_advanced_option>;
};

