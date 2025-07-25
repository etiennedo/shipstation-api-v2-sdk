/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { date_type } from './date_type';
import type { monetary_value } from './monetary_value';
import type { rate_type } from './rate_type';
import type { se_id } from './se_id';
import type { validation_status } from './validation_status';
/**
 * A rate estimate
 */
export type rate_estimate = {
    readonly rate_type: rate_type;
    /**
     * A string that uniquely identifies the carrier
     */
    readonly carrier_id: se_id;
    /**
     * The shipping amount
     */
    readonly shipping_amount: monetary_value;
    /**
     * The insurance amount
     */
    readonly insurance_amount: monetary_value;
    /**
     * The confirmation amount
     */
    readonly confirmation_amount: monetary_value;
    /**
     * Any other charges associated with this rate
     */
    readonly other_amount: monetary_value;
    /**
     * Tariff and additional taxes associated with an international shipment.
     */
    readonly tax_amount?: monetary_value;
    /**
     * Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
     * custom zones that vary depending upon the ship_to and ship_from location
     *
     */
    readonly zone: number;
    /**
     * package type that this rate was estimated for
     */
    readonly package_type: string;
    /**
     * The number of days estimated for delivery, this will show the _actual_ delivery
     * time if for example, the package gets shipped on a Friday
     *
     */
    readonly delivery_days?: number;
    /**
     * Indicates if the rate is guaranteed.
     */
    readonly guaranteed_service: boolean;
    readonly estimated_delivery_date?: date_type;
    /**
     * The carrier delivery days
     */
    readonly carrier_delivery_days?: string;
    /**
     * ship date
     */
    readonly ship_date?: string;
    /**
     * Indicates if the rates been negotiated
     */
    readonly negotiated_rate: boolean;
    /**
     * service type
     */
    readonly service_type: string;
    /**
     * service code for the rate
     */
    readonly service_code: string;
    /**
     * Indicates if rate is trackable
     */
    readonly trackable: boolean;
    /**
     * A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc.
     */
    readonly carrier_code: string;
    /**
     * carrier nickname
     */
    readonly carrier_nickname: string;
    /**
     * carrier friendly name
     */
    readonly carrier_friendly_name: string;
    readonly validation_status: validation_status;
    /**
     * The warning messages
     */
    readonly warning_messages: Array<string>;
    /**
     * The error messages
     */
    readonly error_messages: Array<string>;
};

