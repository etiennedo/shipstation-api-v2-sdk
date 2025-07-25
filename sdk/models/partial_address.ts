/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_residential_indicator } from './address_residential_indicator';
import type { country_code } from './country_code';
import type { postal_code } from './postal_code';
/**
 * A complete or partial mailing address.
 */
export type partial_address = {
    /**
     * The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
     *
     */
    name?: string;
    /**
     * The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
     *
     */
    phone?: string;
    /**
     * Email for the address owner.
     *
     */
    email?: string;
    /**
     * If this is a business address, then the company name should be specified here.
     *
     */
    company_name?: string;
    /**
     * The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
     *
     */
    address_line1?: string;
    /**
     * The second line of the street address.  For some addresses, this line may not be needed.
     *
     */
    address_line2?: string;
    /**
     * The third line of the street address.  For some addresses, this line may not be needed.
     *
     */
    address_line3?: string;
    /**
     * The name of the city or locality
     */
    city_locality?: string;
    /**
     * The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
     *
     */
    state_province?: string;
    postal_code?: postal_code;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
     *
     */
    country_code?: country_code;
    /**
     * Indicates whether this is a residential address.
     */
    address_residential_indicator?: address_residential_indicator;
};

