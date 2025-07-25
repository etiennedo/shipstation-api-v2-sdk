/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dangerous_amount } from './dangerous_amount';
/**
 * Dangerous goods attribute associated with the product
 *
 */
export type dangerous_goods = {
    /**
     * UN number to identify the dangerous goods.
     */
    id_number?: string;
    /**
     * Trade description of the dangerous goods.
     */
    shipping_name?: string;
    /**
     * Recognized Technical or chemical name of dangerous goods.
     */
    technical_name?: string;
    /**
     * Dangerous goods product class based on regulation.
     */
    product_class?: string;
    /**
     * A secondary of product class for substances presenting more than one particular hazard
     */
    product_class_subsidiary?: string;
    packaging_group?: dangerous_goods.packaging_group;
    /**
     * This model represents the amount of the dangerous goods.
     */
    dangerous_amount?: dangerous_amount;
    /**
     * Quantity of dangerous goods.
     */
    quantity?: number;
    /**
     * The specific standardized packaging instructions from the relevant regulatory agency that have been applied to the parcel/container.
     */
    packaging_instruction?: string;
    packaging_instruction_section?: dangerous_goods.packaging_instruction_section;
    /**
     * The type of exterior packaging used to contain the dangerous good.
     */
    packaging_type?: string;
    transport_mean?: dangerous_goods.transport_mean;
    /**
     * Transport category assign to dangerous goods for the transport purpose.
     */
    transport_category?: string;
    /**
     * Name of the regulatory authority.
     */
    regulation_authority?: string;
    regulation_level?: dangerous_goods.regulation_level;
    /**
     * Indication if the substance is radioactive.
     */
    radioactive?: boolean;
    /**
     * Indication if the substance needs to be reported to regulatory authority based on the quantity.
     */
    reportable_quantity?: boolean;
    /**
     * Defines which types of tunnels the shipment is allowed to go through
     */
    tunnel_code?: string;
    /**
     * Provider additonal description regarding the dangerous goods. This is used as a placed holder to provider additional context and varies by carrier
     */
    additional_description?: string;
};
export namespace dangerous_goods {
    export enum packaging_group {
        I = 'i',
        II = 'ii',
        III = 'iii',
    }
    export enum packaging_instruction_section {
        SECTION_1 = 'section_1',
        SECTION_2 = 'section_2',
        SECTION_1A = 'section_1a',
        SECTION_1B = 'section_1b',
    }
    export enum transport_mean {
        GROUND = 'ground',
        WATER = 'water',
        CARGO_AIRCRAFT_ONLY = 'cargo_aircraft_only',
        PASSENGER_AIRCRAFT = 'passenger_aircraft',
    }
    export enum regulation_level {
        LIGHTLY_REGULATED = 'lightly_regulated',
        FULLY_REGULATED = 'fully_regulated',
        LIMITED_QUANTITIES = 'limited_quantities',
        EXCEPTED_QUANTITY = 'excepted_quantity',
    }
}

