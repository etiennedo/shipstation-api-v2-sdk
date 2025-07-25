import type { se_id } from './se_id';
/**
 * A service offered by the carrier
 */
export type service = {
    /**
     * A string that uniquely identifies the carrier
     */
    readonly carrier_id?: se_id;
    carrier_code?: se_id;
    /**
     * service code
     */
    readonly service_code?: string;
    /**
     * User friendly service name
     */
    readonly name?: string;
    /**
     * Supports domestic shipping
     */
    readonly domestic?: boolean;
    /**
     * Supports international shipping.
     */
    readonly international?: boolean;
    /**
     * Carrier supports multiple packages per shipment
     */
    readonly is_multi_package_supported?: boolean;
};
