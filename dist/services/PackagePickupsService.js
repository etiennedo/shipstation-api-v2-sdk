"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePickupsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PackagePickupsService {
    /**
     * List scheduled pickups
     * List all pickups that have been scheduled for this carrier
     * @param carrierId Carrier ID
     * @param warehouseId Warehouse ID
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @param createdAtEnd Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pageSize The number of results to return per response.
     * @returns any The request was a success.
     * @throws ApiError
     */
    static listScheduledPickups(carrierId, warehouseId, createdAtStart, createdAtEnd, page = 1, pageSize = 25) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/pickups',
            query: {
                'carrier_id': carrierId,
                'warehouse_id': warehouseId,
                'created_at_start': createdAtStart,
                'created_at_end': createdAtEnd,
                'page': page,
                'page_size': pageSize,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Schedule a pickup
     * Schedule a package pickup with a carrier
     * @param requestBody
     * @returns any The request was a success.
     * @throws ApiError
     */
    static schedulePickup(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/pickups',
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
     * Get pickup by id
     * Get Pickup By ID
     * @param pickupId
     * @returns any The request was a success.
     * @throws ApiError
     */
    static getPickupById(pickupId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/pickups/{pickup_id}',
            path: {
                'pickup_id': pickupId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Delete a scheduled pickup
     * Delete a previously-scheduled pickup by ID
     * @param pickupId
     * @returns any Return the `pickup_id` of the scheduled pickup that was successfully deleted
     *
     * @throws ApiError
     */
    static deleteScheduledPickup(pickupId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v2/pickups/{pickup_id}',
            path: {
                'pickup_id': pickupId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.PackagePickupsService = PackagePickupsService;
