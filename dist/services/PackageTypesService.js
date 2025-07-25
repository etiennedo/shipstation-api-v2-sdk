"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageTypesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PackageTypesService {
    /**
     * List custom package types
     * List the custom package types associated with the account
     * @returns list_package_types_response_body The request was a success.
     * @throws ApiError
     */
    static listPackageTypes() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createPackageType(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getPackageTypeById(packageId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updatePackageType(packageId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deletePackageTyp(packageId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.PackageTypesService = PackageTypesService;
