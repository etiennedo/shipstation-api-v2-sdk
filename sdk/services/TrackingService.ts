/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrackingService {
    /**
     * Stop tracking a package
     * Unsubscribe from tracking updates for a package.
     * @param carrierCode A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc.
     *
     * @param trackingNumber The tracking number associated with a shipment
     * @returns void
     * @throws ApiError
     */
    public static stopTracking(
        carrierCode?: string,
        trackingNumber?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/tracking/stop',
            query: {
                'carrier_code': carrierCode,
                'tracking_number': trackingNumber,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
