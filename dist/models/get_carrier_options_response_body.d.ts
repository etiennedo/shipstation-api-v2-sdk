import type { carrier_advanced_option } from './carrier_advanced_option';
/**
 * A carrier list options response body
 */
export type get_carrier_options_response_body = {
    /**
     * AN array of carrier options
     */
    readonly options?: Array<carrier_advanced_option>;
};
