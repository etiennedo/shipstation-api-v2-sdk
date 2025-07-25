/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { create_package_type_request_body } from '../models/create_package_type_request_body';
import type { create_package_type_response_body } from '../models/create_package_type_response_body';
import type { get_package_type_by_id_response_body } from '../models/get_package_type_by_id_response_body';
import type { list_package_types_response_body } from '../models/list_package_types_response_body';
import type { se_id } from '../models/se_id';
import type { update_package_type_request_body } from '../models/update_package_type_request_body';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackageTypesService {
    /**
     * List custom package types
     * List the custom package types associated with the account
     * @returns list_package_types_response_body The request was a success.
     * @throws ApiError
     */
    public static listPackageTypes(): CancelablePromise<list_package_types_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/packages',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create custom package type
     * Create a custom package type to better assist in getting accurate rate estimates
     * @param requestBody
     * @returns create_package_type_response_body The request was a success.
     * @throws ApiError
     */
    public static createPackageType(
        requestBody: create_package_type_request_body,
    ): CancelablePromise<create_package_type_response_body> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/packages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get custom package type by id
     * Get Custom Package Type by ID
     * @param packageId Package ID
     * @returns get_package_type_by_id_response_body The request was a success.
     * @throws ApiError
     */
    public static getPackageTypeById(
        packageId: se_id,
    ): CancelablePromise<get_package_type_by_id_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/packages/{package_id}',
            path: {
                'package_id': packageId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`package\` corresponds to the \`package_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Update custom package type by id
     * Update the custom package type object by ID
     * @param packageId Package ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updatePackageType(
        packageId: se_id,
        requestBody: update_package_type_request_body,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/packages/{package_id}',
            path: {
                'package_id': packageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Delete a custom package by id
     * Delete a custom package using the ID
     * @param packageId Package ID
     * @returns void
     * @throws ApiError
     */
    public static deletePackageTyp(
        packageId: se_id,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/packages/{package_id}',
            path: {
                'package_id': packageId,
            },
            errors: {
                400: `The API returns a 400 response when no \`package\` corresponds to the \`package_id\` provided.`,
                404: `The API returns a 404 response when no \`package\` corresponds to the \`package_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
}
