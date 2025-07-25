/**
 * A complete or partial mailing address.
 */
export type partial_shipping_address_to = {
    /**
     * Additional text about how to handle the shipment at this address.
     *
     */
    instructions?: string;
    geolocation?: Array<{
        /**
         * Enum of available type of geolocation items:
         * - 'what3words' functionality allows to specify a location by providing 3 words that have been assign to the specific location see [link](https://what3words.com/business) for more details.
         *
         */
        type?: 'what3words';
        /**
         * value of the geolocation item
         */
        value?: string;
    }>;
};
