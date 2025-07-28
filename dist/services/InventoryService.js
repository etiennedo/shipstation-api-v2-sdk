"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InventoryService {
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
    static getInventoryLevels(params) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/inventory',
            query: {
                'sku': params.sku,
                'inventory_warehouse_id': params.inventoryWarehouseId,
                'inventory_location_id': params.inventoryLocationId,
                'group_by': params.groupBy,
                'limit': params.limit,
            },
        });
    }
    /**
     * Update SKU stock levels and related properties
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateSkuStockLevels(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/inventory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all inventory warehouses
     * @param limit
     * @returns any List of inventory warehouses
     * @throws ApiError
     */
    static getInventoryWarehouses(limit) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/inventory_warehouses',
            query: {
                'limit': limit,
            },
        });
    }
    /**
     * Create a new inventory warehouse
     * @param requestBody
     * @returns any Inventory warehouse successfully created
     * @throws ApiError
     */
    static addNewInventoryWarehouse(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/inventory_warehouses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a specific inventory warehouse and related properties using its warehouse ID
     * @param inventoryWarehouseId
     * @returns any Inventory warehouse details
     * @throws ApiError
     */
    static getInventoryWarehouseById(inventoryWarehouseId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/inventory_warehouses/{inventory_warehouse_id}',
            path: {
                'inventory_warehouse_id': inventoryWarehouseId,
            },
        });
    }
    /**
     * Update an inventory warehouse name
     * @param inventoryWarehouseId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateInventoryWarehouse(inventoryWarehouseId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v2/inventory_warehouses/{inventory_warehouse_id}',
            path: {
                'inventory_warehouse_id': inventoryWarehouseId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an inventory warehouse
     * @param inventoryWarehouseId
     * @param removeInventory If 1, remove all inventory from the warehouse before deleting it.
     * If 0 or missing and the warehouse has On Hand inventory, the request will fail.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteInventoryWarehouse(inventoryWarehouseId, removeInventory) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v2/inventory_warehouses/{inventory_warehouse_id}',
            path: {
                'inventory_warehouse_id': inventoryWarehouseId,
            },
            query: {
                'remove_inventory': removeInventory,
            },
        });
    }
    /**
     * List all inventory locations
     * @param limit
     * @returns any List of inventory locations
     * @throws ApiError
     */
    static listInventoryLocations(limit) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/inventory_locations',
            query: {
                'limit': limit,
            },
        });
    }
    /**
     * Create a new inventory location
     * @param requestBody
     * @returns any Inventory location successfully created
     * @throws ApiError
     */
    static createInventoryLocation(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/inventory_locations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get inventory location by ID
     * @param inventoryLocationId
     * @returns any Inventory location details
     * @throws ApiError
     */
    static getInventoryLocationById(inventoryLocationId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/inventory_locations/{inventory_location_id}',
            path: {
                'inventory_location_id': inventoryLocationId,
            },
        });
    }
    /**
     * Update an inventory location name
     * @param inventoryLocationId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateInventoryLocation(inventoryLocationId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v2/inventory_locations/{inventory_location_id}',
            path: {
                'inventory_location_id': inventoryLocationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an inventory location
     * @param inventoryLocationId
     * @param removeInventory If 1, remove all inventory from the location before deleting it.
     * If 0 or missing and the location has On Hand inventory, the request will fail.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteInventoryLocationById(inventoryLocationId, removeInventory) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v2/inventory_locations/{inventory_location_id}',
            path: {
                'inventory_location_id': inventoryLocationId,
            },
            query: {
                'remove_inventory': removeInventory,
            },
        });
    }
}
exports.InventoryService = InventoryService;
