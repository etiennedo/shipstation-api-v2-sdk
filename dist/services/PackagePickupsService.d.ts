import type { delete_scheduled_pickup_response_body } from '../models/delete_scheduled_pickup_response_body';
import type { error_response_body } from '../models/error_response_body';
import type { list_pickup_response_body } from '../models/list_pickup_response_body';
import type { pickup_resource_id } from '../models/pickup_resource_id';
import type { pickup_response_body } from '../models/pickup_response_body';
import type { schedule_pickup_request_body } from '../models/schedule_pickup_request_body';
import type { schedule_pickup_response_body } from '../models/schedule_pickup_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PackagePickupsService {
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
    static listScheduledPickups(params?: {
        carrierId?: se_id;
        warehouseId?: se_id;
        createdAtStart?: string;
        createdAtEnd?: string;
        page?: number;
        pageSize?: number;
    }): CancelablePromise<(list_pickup_response_body & error_response_body)>;
    /**
     * Schedule a pickup
     * Schedule a package pickup with a carrier
     * @param requestBody
     * @returns any The request was a success.
     * @throws ApiError
     */
    static schedulePickup(requestBody: schedule_pickup_request_body): CancelablePromise<(schedule_pickup_response_body & error_response_body)>;
    /**
     * Get pickup by id
     * Get Pickup By ID
     * @param pickupId
     * @returns any The request was a success.
     * @throws ApiError
     */
    static getPickupById(pickupId: pickup_resource_id): CancelablePromise<(pickup_response_body & error_response_body)>;
    /**
     * Delete a scheduled pickup
     * Delete a previously-scheduled pickup by ID
     * @param pickupId
     * @returns any Return the `pickup_id` of the scheduled pickup that was successfully deleted
     *
     * @throws ApiError
     */
    static deleteScheduledPickup(pickupId: pickup_resource_id): CancelablePromise<(error_response_body & delete_scheduled_pickup_response_body)>;
}
