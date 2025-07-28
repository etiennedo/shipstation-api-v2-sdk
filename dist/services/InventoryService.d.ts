import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InventoryService {
    /**
     * List SKU inventory levels
     * @param sku Optional list of SKUs to filter down to
     * @param inventoryWarehouseId
     * @param inventoryLocationId
     * @param groupBy Get counts for SKUs across locations or warehouses
     * @param limit
     * @returns any Inventory levels for SKUs
     * @throws ApiError
     */
    static getInventoryLevels(params: {
        sku?: string;
        inventoryWarehouseId?: string;
        inventoryLocationId?: string;
        groupBy?: 'warehouse' | 'location';
        limit?: number;
    }): CancelablePromise<{
        inventory?: Array<{
            sku?: string;
            on_hand?: number;
            allocated?: number;
            available?: number;
            average_cost?: {
                amount?: number;
                currency?: string;
            };
            inventory_warehouse_id?: string;
            inventory_location_id?: string;
        }>;
        total?: number;
        page?: number;
        pages?: number;
        links?: {
            first?: {
                href?: string;
            };
            last?: {
                href?: string;
            };
            prev?: {
                href?: string;
            };
            next?: {
                href?: string;
            };
        };
    }>;
    /**
     * Update SKU stock levels and related properties
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateSkuStockLevels(requestBody: {
        /**
         * The type of update to perform:
         * increment: Increase inventory quantity for specified location.
         * decrement: Decreate inventory quantity for specified location given a set of filters.
         * adjust: Adjust on hand quantity of inventory for specified location to the quantity indicated. This is done by either adding or removing inventory in the condition specified.
         * modify: Modify attributes on specified inventory. The filters work the same as for decrement transaction type.
         *
         */
        transaction_type: 'increment' | 'decrement' | 'adjust' | 'modify';
        inventory_location_id: string;
        sku: string;
        quantity: number;
        cost?: {
            amount?: number;
            currency?: string;
        };
        condition?: 'sellable' | 'damaged' | 'expired' | 'qa_hold';
        lot?: string;
        usable_start_date?: string;
        usable_end_date?: string;
        effective_at?: string;
        reason?: string;
        notes?: string;
        /**
         * Used with the modify transaction type to move inventory to a new location
         */
        new_inventory_location_id?: string;
        /**
         * Used with the modify transaction type to update the cost of existing inventory
         */
        new_cost?: {
            amount?: number;
            currency?: string;
        };
        /**
         * Used with the modify transaction type to change the condition of existing inventory
         */
        new_condition?: 'sellable' | 'damaged' | 'expired' | 'qa_hold';
    }): CancelablePromise<void>;
    /**
     * List all inventory warehouses
     * @param limit
     * @returns any List of inventory warehouses
     * @throws ApiError
     */
    static getInventoryWarehouses(limit?: number): CancelablePromise<{
        inventory_warehouses?: Array<{
            inventory_warehouse_id?: string;
            name?: string;
            created_at?: string;
            updated_at?: string;
        }>;
        total?: number;
        page?: number;
        pages?: number;
        links?: {
            first?: {
                href?: string;
            };
            last?: {
                href?: string;
            };
            prev?: {
                href?: string;
            };
            next?: {
                href?: string;
            };
        };
    }>;
    /**
     * Create a new inventory warehouse
     * @param requestBody
     * @returns any Inventory warehouse successfully created
     * @throws ApiError
     */
    static addNewInventoryWarehouse(requestBody: {
        name: string;
    }): CancelablePromise<{
        inventory_warehouse_id?: string;
        name?: string;
        created_at?: string;
        updated_at?: string;
    }>;
    /**
     * Get a specific inventory warehouse and related properties using its warehouse ID
     * @param inventoryWarehouseId
     * @returns any Inventory warehouse details
     * @throws ApiError
     */
    static getInventoryWarehouseById(inventoryWarehouseId: string): CancelablePromise<{
        inventory_warehouse_id?: string;
        name?: string;
        created_at?: string;
        updated_at?: string;
    }>;
    /**
     * Update an inventory warehouse name
     * @param inventoryWarehouseId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateInventoryWarehouse(inventoryWarehouseId: string, requestBody: {
        name?: string;
    }): CancelablePromise<void>;
    /**
     * Delete an inventory warehouse
     * @param inventoryWarehouseId
     * @param removeInventory If 1, remove all inventory from the warehouse before deleting it.
     * If 0 or missing and the warehouse has On Hand inventory, the request will fail.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteInventoryWarehouse(inventoryWarehouseId: string, removeInventory?: '0' | '1'): CancelablePromise<void>;
    /**
     * List all inventory locations
     * @param limit
     * @returns any List of inventory locations
     * @throws ApiError
     */
    static listInventoryLocations(limit?: number): CancelablePromise<{
        inventory_locations?: Array<{
            inventory_location_id?: string;
            name?: string;
            inventory_warehouse_id?: string;
            created_at?: string;
            updated_at?: string;
        }>;
        total?: number;
        page?: number;
        pages?: number;
        links?: {
            first?: {
                href?: string;
            };
            last?: {
                href?: string;
            };
            prev?: {
                href?: string;
            };
            next?: {
                href?: string;
            };
        };
    }>;
    /**
     * Create a new inventory location
     * @param requestBody
     * @returns any Inventory location successfully created
     * @throws ApiError
     */
    static createInventoryLocation(requestBody: {
        name: string;
        inventory_warehouse_id: string;
    }): CancelablePromise<{
        inventory_location_id?: string;
        name?: string;
        inventory_warehouse_id?: string;
        created_at?: string;
        updated_at?: string;
    }>;
    /**
     * Get inventory location by ID
     * @param inventoryLocationId
     * @returns any Inventory location details
     * @throws ApiError
     */
    static getInventoryLocationById(inventoryLocationId: string): CancelablePromise<{
        inventory_location_id?: string;
        name?: string;
        inventory_warehouse_id?: string;
        created_at?: string;
        updated_at?: string;
    }>;
    /**
     * Update an inventory location name
     * @param inventoryLocationId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateInventoryLocation(inventoryLocationId: string, requestBody: {
        name?: string;
    }): CancelablePromise<void>;
    /**
     * Delete an inventory location
     * @param inventoryLocationId
     * @param removeInventory If 1, remove all inventory from the location before deleting it.
     * If 0 or missing and the location has On Hand inventory, the request will fail.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteInventoryLocationById(inventoryLocationId: string, removeInventory?: '0' | '1'): CancelablePromise<void>;
}
