"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ShipmentsService {
    /**
     * List shipments
     * Get list of Shipments
     * @param pickupId
     * @param shipmentStatus
     * @param batchId Batch ID
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @param createdAtEnd Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     * @param modifiedAtStart Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)
     * @param modifiedAtEnd Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pageSize The number of results to return per response.
     * @param salesOrderId Sales Order ID
     * @param sortDir Controls the sort order of the query.
     * @param shipmentNumber The user or order source defined shipment number
     * @param shipToName The name associated with the ship_to
     * @param itemKeyword Returns shipments that contain items that match the specified keyword. Fields searched are Sku, Description, and Options.
     * @param paymentDateStart Used to create a filter for resources based on the payment_date parameter after a certain time.
     * @param paymentDateEnd Used to create a filter for resources based on the payment_date parameter before a certain time.
     * @param storeId Store ID
     * @param externalShipmentId
     * @param sortBy
     * @returns list_shipments_response_body The request was a success.
     * @throws ApiError
     */
    static listShipments(pickupId, shipmentStatus, batchId, createdAtStart, createdAtEnd, modifiedAtStart, modifiedAtEnd, page = 1, pageSize = 25, salesOrderId, sortDir, shipmentNumber, shipToName, itemKeyword, paymentDateStart, paymentDateEnd, storeId, externalShipmentId, sortBy) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/shipments',
            query: {
                'shipment_status': shipmentStatus,
                'batch_id': batchId,
                'pickup_id': pickupId,
                'created_at_start': createdAtStart,
                'created_at_end': createdAtEnd,
                'modified_at_start': modifiedAtStart,
                'modified_at_end': modifiedAtEnd,
                'page': page,
                'page_size': pageSize,
                'sales_order_id': salesOrderId,
                'sort_dir': sortDir,
                'shipment_number': shipmentNumber,
                'ship_to_name': shipToName,
                'item_keyword': itemKeyword,
                'payment_date_start': paymentDateStart,
                'payment_date_end': paymentDateEnd,
                'store_id': storeId,
                'external_shipment_id': externalShipmentId,
                'sort_by': sortBy,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create shipments
     * Create one or more shipments
     * @param requestBody
     * @returns create_shipments_response_body The request was a success.
     * @throws ApiError
     */
    static createShipments(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/shipments',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get shipment by external id
     * Query Shipments created using your own custom ID convention using this endpoint
     * @param externalShipmentId
     * @returns get_shipment_by_external_id_response_body The request was a success.
     * @throws ApiError
     */
    static getShipmentByExternalId(externalShipmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/shipments/external_shipment_id/{external_shipment_id}',
            path: {
                'external_shipment_id': externalShipmentId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get shipment by id
     * Get an individual shipment based on its ID
     * @param shipmentId Shipment ID
     * @returns get_shipment_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getShipmentById(shipmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/shipments/{shipment_id}',
            path: {
                'shipment_id': shipmentId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Cancel a shipment
     * Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
     * An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
     * would remove it from this process
     *
     * @param shipmentId Shipment ID
     * @returns void
     * @throws ApiError
     */
    static cancelShipments(shipmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v2/shipments/{shipment_id}/cancel',
            path: {
                'shipment_id': shipmentId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get shipment rates
     * Get Rates for the shipment information associated with the shipment ID
     * @param shipmentId Shipment ID
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @returns list_shipment_rates_response_body The request was a success.
     * @throws ApiError
     */
    static listShipmentRates(shipmentId, createdAtStart) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/shipments/{shipment_id}/rates',
            path: {
                'shipment_id': shipmentId,
            },
            query: {
                'created_at_start': createdAtStart,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Add tag to shipment
     * Add a tag to the shipment object
     * @param shipmentId Shipment ID
     * @param tagName
     * @returns tag_shipment_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static tagShipment(shipmentId, tagName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/shipments/{shipment_id}/tags/{tag_name}',
            path: {
                'shipment_id': shipmentId,
                'tag_name': tagName,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Remove tag from shipment
     * Remove an existing tag from the Shipment object
     * @param shipmentId Shipment ID
     * @param tagName
     * @returns void
     * @throws ApiError
     */
    static untagShipment(shipmentId, tagName) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v2/shipments/{shipment_id}/tags/{tag_name}',
            path: {
                'shipment_id': shipmentId,
                'tag_name': tagName,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.ShipmentsService = ShipmentsService;
