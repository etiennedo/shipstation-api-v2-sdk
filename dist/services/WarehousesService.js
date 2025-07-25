"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehousesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WarehousesService {
    /**
     * List warehouses
     * Retrieve a list of warehouses associated with this account.
     * @returns list_warehouses_response_body The request was a success.
     * @throws ApiError
     */
    static listWarehouses() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/warehouses',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get warehouse by id
     * Retrieve warehouse data based on the warehouse ID
     * @param warehouseId Warehouse ID
     * @returns get_warehouse_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getWarehouseById(warehouseId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/warehouses/{warehouse_id}',
            path: {
                'warehouse_id': warehouseId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.WarehousesService = WarehousesService;
