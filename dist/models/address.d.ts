import type { address_residential_indicator } from './address_residential_indicator';
import type { country_code } from './country_code';
import type { partial_address } from './partial_address';
import type { postal_code } from './postal_code';
/**
 * Any residential or business mailing address, anywhere in the world.
 *
 * > **Note:** Either `name` or `company_name` must be set. Both may be specified, if relevant.
 *
 */
export type address = (partial_address & {
    /**
     * The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
     *
     */
    name: string;
    /**
     * The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
     *
     */
    phone: string;
    /**
     * The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
     *
     */
    address_line1: string;
    /**
     * The name of the city or locality
     */
    city_locality: string;
    /**
     * The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
     *
     */
    state_province: string;
    postal_code: postal_code;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
     *
     */
    country_code: country_code;
    /**
     * Indicates whether this is a residential address.
     */
    address_residential_indicator: address_residential_indicator;
});
