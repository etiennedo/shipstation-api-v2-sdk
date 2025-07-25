/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { get_warehouse_by_id_response_body } from '../models/get_warehouse_by_id_response_body';
import type { list_warehouses_response_body } from '../models/list_warehouses_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WarehousesService {
    /**
     * List warehouses
     * Retrieve a list of warehouses associated with this account.
     * @returns list_warehouses_response_body The request was a success.
     * @throws ApiError
     */
    public static listWarehouses(): CancelablePromise<list_warehouses_response_body> {
        return __request(OpenAPI, {
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
    public static getWarehouseById(
        warehouseId: se_id,
    ): CancelablePromise<get_warehouse_by_id_response_body> {
        return __request(OpenAPI, {
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
