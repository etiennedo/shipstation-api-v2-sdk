import type { get_warehouse_by_id_response_body } from '../models/get_warehouse_by_id_response_body';
import type { list_warehouses_response_body } from '../models/list_warehouses_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WarehousesService {
    /**
     * List warehouses
     * Retrieve a list of warehouses associated with this account.
     * @returns list_warehouses_response_body The request was a success.
     * @throws ApiError
     */
    static listWarehouses(): CancelablePromise<list_warehouses_response_body>;
    /**
     * Get warehouse by id
     * Retrieve warehouse data based on the warehouse ID
     * @param warehouseId Warehouse ID
     * @returns get_warehouse_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getWarehouseById(warehouseId: se_id): CancelablePromise<get_warehouse_by_id_response_body>;
}
