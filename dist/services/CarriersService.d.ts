import type { error_response_body } from '../models/error_response_body';
import type { get_carrier_by_id_response_body } from '../models/get_carrier_by_id_response_body';
import type { get_carrier_options_response_body } from '../models/get_carrier_options_response_body';
import type { list_carrier_package_types_response_body } from '../models/list_carrier_package_types_response_body';
import type { list_carrier_services_response_body } from '../models/list_carrier_services_response_body';
import type { list_carriers_response_body } from '../models/list_carriers_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CarriersService {
    /**
     * List carriers
     * List all carriers that have been added to this account.
     * @returns any The request was a success.
     * @throws ApiError
     */
    static listCarriers(): CancelablePromise<(list_carriers_response_body & error_response_body)>;
    /**
     * Get carrier by id
     * Retrive details about a specific carrier by its carrier id.
     * @param carrierId Carrier ID
     * @returns get_carrier_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getCarrierById(carrierId: se_id): CancelablePromise<get_carrier_by_id_response_body>;
    /**
     * Get carrier options
     * Get a list of the options available for a specific carriers.
     * @param carrierId Carrier ID
     * @returns get_carrier_options_response_body The request was a success.
     * @throws ApiError
     */
    static getCarrierOptions(carrierId: se_id): CancelablePromise<get_carrier_options_response_body>;
    /**
     * List carrier package types
     * List the package types associated with a specific carrier.
     * @param carrierId Carrier ID
     * @returns list_carrier_package_types_response_body The request was a success.
     * @throws ApiError
     */
    static listCarrierPackageTypes(carrierId: se_id): CancelablePromise<list_carrier_package_types_response_body>;
    /**
     * List carrier services
     * List the services associated with a specific carrier id.
     * @param carrierId Carrier ID
     * @returns list_carrier_services_response_body The request was a success.
     * @throws ApiError
     */
    static listCarrierServices(carrierId: se_id): CancelablePromise<list_carrier_services_response_body>;
}
