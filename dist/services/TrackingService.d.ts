import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TrackingService {
    /**
     * Stop tracking a package
     * Unsubscribe from tracking updates for a package.
     * @param carrierCode A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc.
     *
     * @param trackingNumber The tracking number associated with a shipment
     * @returns void
     * @throws ApiError
     */
    static stopTracking(carrierCode?: string, trackingNumber?: string): CancelablePromise<void>;
}
