/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { delete_scheduled_pickup_response_body } from '../models/delete_scheduled_pickup_response_body';
import type { error_response_body } from '../models/error_response_body';
import type { list_pickup_response_body } from '../models/list_pickup_response_body';
import type { pickup_resource_id } from '../models/pickup_resource_id';
import type { pickup_response_body } from '../models/pickup_response_body';
import type { schedule_pickup_request_body } from '../models/schedule_pickup_request_body';
import type { schedule_pickup_response_body } from '../models/schedule_pickup_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackagePickupsService {
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
    public static listScheduledPickups(
        params: {
            carrierId?: se_id;
            warehouseId?: se_id;
            createdAtStart?: string;
            createdAtEnd?: string;
            page?: number;
            pageSize?: number;
        } = {},
    ): CancelablePromise<(list_pickup_response_body & error_response_body)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/pickups',
            query: {
                'carrier_id': params.carrierId,
                'warehouse_id': params.warehouseId,
                'created_at_start': params.createdAtStart,
                'created_at_end': params.createdAtEnd,
                'page': params.page,
                'page_size': params.pageSize,
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
    public static schedulePickup(
        requestBody: schedule_pickup_request_body,
    ): CancelablePromise<(schedule_pickup_response_body & error_response_body)> {
        return __request(OpenAPI, {
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
    public static getPickupById(
        pickupId: pickup_resource_id,
    ): CancelablePromise<(pickup_response_body & error_response_body)> {
        return __request(OpenAPI, {
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
    public static deleteScheduledPickup(
        pickupId: pickup_resource_id,
    ): CancelablePromise<(error_response_body & delete_scheduled_pickup_response_body)> {
        return __request(OpenAPI, {
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
