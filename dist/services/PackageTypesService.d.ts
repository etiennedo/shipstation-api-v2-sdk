import type { create_package_type_request_body } from '../models/create_package_type_request_body';
import type { create_package_type_response_body } from '../models/create_package_type_response_body';
import type { get_package_type_by_id_response_body } from '../models/get_package_type_by_id_response_body';
import type { list_package_types_response_body } from '../models/list_package_types_response_body';
import type { se_id } from '../models/se_id';
import type { update_package_type_request_body } from '../models/update_package_type_request_body';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PackageTypesService {
    /**
     * List custom package types
     * List the custom package types associated with the account
     * @returns list_package_types_response_body The request was a success.
     * @throws ApiError
     */
    static listPackageTypes(): CancelablePromise<list_package_types_response_body>;
    /**
     * Create custom package type
     * Create a custom package type to better assist in getting accurate rate estimates
     * @param requestBody
     * @returns create_package_type_response_body The request was a success.
     * @throws ApiError
     */
    static createPackageType(requestBody: create_package_type_request_body): CancelablePromise<create_package_type_response_body>;
    /**
     * Get custom package type by id
     * Get Custom Package Type by ID
     * @param packageId Package ID
     * @returns get_package_type_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getPackageTypeById(packageId: se_id): CancelablePromise<get_package_type_by_id_response_body>;
    /**
     * Update custom package type by id
     * Update the custom package type object by ID
     * @param packageId Package ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updatePackageType(packageId: se_id, requestBody: update_package_type_request_body): CancelablePromise<void>;
    /**
     * Delete a custom package by id
     * Delete a custom package using the ID
     * @param packageId Package ID
     * @returns void
     * @throws ApiError
     */
    static deletePackageTyp(packageId: se_id): CancelablePromise<void>;
}
