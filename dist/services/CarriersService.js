"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarriersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CarriersService {
    /**
     * List carriers
     * List all carriers that have been added to this account.
     * @returns any The request was a success.
     * @throws ApiError
     */
    static listCarriers() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/carriers',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get carrier by id
     * Retrive details about a specific carrier by its carrier id.
     * @param carrierId Carrier ID
     * @returns get_carrier_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getCarrierById(carrierId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/carriers/{carrier_id}',
            path: {
                'carrier_id': carrierId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get carrier options
     * Get a list of the options available for a specific carriers.
     * @param carrierId Carrier ID
     * @returns get_carrier_options_response_body The request was a success.
     * @throws ApiError
     */
    static getCarrierOptions(carrierId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/carriers/{carrier_id}/options',
            path: {
                'carrier_id': carrierId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * List carrier package types
     * List the package types associated with a specific carrier.
     * @param carrierId Carrier ID
     * @returns list_carrier_package_types_response_body The request was a success.
     * @throws ApiError
     */
    static listCarrierPackageTypes(carrierId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/carriers/{carrier_id}/packages',
            path: {
                'carrier_id': carrierId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * List carrier services
     * List the services associated with a specific carrier id.
     * @param carrierId Carrier ID
     * @returns list_carrier_services_response_body The request was a success.
     * @throws ApiError
     */
    static listCarrierServices(carrierId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/carriers/{carrier_id}/services',
            path: {
                'carrier_id': carrierId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.CarriersService = CarriersService;
