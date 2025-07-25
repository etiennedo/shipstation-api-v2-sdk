"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class LabelsService {
    /**
     * List labels
     * This method returns a list of labels that you've created. You can optionally filter the results as well as control their sort order and the number of results returned at a time.
     *
     * By default all labels are returned 25 at a time, starting with the most recently created ones. You can combine multiple filter options to narrow-down the results.  For example, if you only want your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`.
     *
     * @param labelStatus Only return labels that are currently in the specified status.
     * @param serviceCode Only return labels for a specific carrier service.
     * @param carrierId Carrier ID
     * @param trackingNumber The tracking number associated with a shipment
     * @param batchId Batch ID
     * @param rateId Rate ID
     * @param shipmentId Shipment ID
     * @param warehouseId Warehouse ID
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @param createdAtEnd Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pageSize The number of results to return per response.
     * @param sortDir Controls the sort order of the query.
     * @param sortBy Controls which field the query is sorted by.
     * @returns list_labels_response_body The response includes a `labels` array containing a page of results (as determined by the `page_size` query parameter). It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.
     *
     * @throws ApiError
     */
    static listLabels(labelStatus, serviceCode, carrierId, trackingNumber, batchId, rateId, shipmentId, warehouseId, createdAtStart, createdAtEnd, page = 1, pageSize = 25, sortDir, sortBy = 'created_at') {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/labels',
            query: {
                'label_status': labelStatus,
                'service_code': serviceCode,
                'carrier_id': carrierId,
                'tracking_number': trackingNumber,
                'batch_id': batchId,
                'rate_id': rateId,
                'shipment_id': shipmentId,
                'warehouse_id': warehouseId,
                'created_at_start': createdAtStart,
                'created_at_end': createdAtEnd,
                'page': page,
                'page_size': pageSize,
                'sort_dir': sortDir,
                'sort_by': sortBy,
            },
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Purchase label
     * Purchase and print a label for shipment.
     * @param requestBody
     * @returns create_label_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabel(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/labels',
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
     * Purchase label with rate id
     * When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used to generate a label without having to refill in the shipment information repeatedly.
     *
     * @param rateId Rate ID
     * @param requestBody
     * @returns create_label_from_rate_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabelFromRate(rateId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/labels/rates/{rate_id}',
            path: {
                'rate_id': rateId,
            },
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
     * Purchase label with shipment id
     * Purchase a label using a shipment ID that has already been created with the desired address and package info.
     *
     * @param shipmentId Shipment ID
     * @param requestBody
     * @returns create_label_from_shipment_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabelFromShipment(shipmentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/labels/shipment/{shipment_id}',
            path: {
                'shipment_id': shipmentId,
            },
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
     * Get label by id
     * Retrieve a specific label by its label id.
     * @param labelId Label ID
     * @param labelDownloadType
     * @returns get_label_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getLabelById(labelId, labelDownloadType) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/labels/{label_id}',
            path: {
                'label_id': labelId,
            },
            query: {
                'label_download_type': labelDownloadType,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`label\` corresponds to the \`label_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create a return label
     * Create a return label for a previously created outbound label. The return label will automatically swap the ship to and ship from addresses from the original label.
     * @param labelId Label ID
     * @param requestBody
     * @returns create_return_label_response_body The request was a success.
     * @throws ApiError
     */
    static createReturnLabel(labelId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/labels/{label_id}/return',
            path: {
                'label_id': labelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`label\` corresponds to the \`label_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get label tracking information
     * Retrieve the label's tracking details.
     * @param labelId Label ID
     * @returns get_tracking_log_from_label_response_body The request was a success.
     * @throws ApiError
     */
    static getTrackingLogFromLabel(labelId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/labels/{label_id}/track',
            path: {
                'label_id': labelId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Void a label by id
     * Void a specific label using its label id. For labels that are paid for at time of label creation, this will also request a refund from the carrier.
     * @param labelId Label ID
     * @returns void_label_response_body The request was a success.
     * @throws ApiError
     */
    static voidLabel(labelId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v2/labels/{label_id}/void',
            path: {
                'label_id': labelId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.LabelsService = LabelsService;
