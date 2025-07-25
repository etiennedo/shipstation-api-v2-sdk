"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TrackingService {
    /**
     * Stop tracking a package
     * Unsubscribe from tracking updates for a package.
     * @param carrierCode A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc.
     *
     * @param trackingNumber The tracking number associated with a shipment
     * @returns void
     * @throws ApiError
     */
    static stopTracking(carrierCode, trackingNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TrackingService = TrackingService;
