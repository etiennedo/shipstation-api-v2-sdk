import type { service } from './service';
/**
 * A carrier list services response body
 */
export type list_carrier_services_response_body = {
    /**
     * An array of services associated with the carrier
     */
    readonly services?: Array<service>;
};
