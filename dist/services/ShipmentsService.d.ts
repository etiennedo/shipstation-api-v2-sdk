import type { create_shipments_request_body } from '../models/create_shipments_request_body';
import type { create_shipments_response_body } from '../models/create_shipments_response_body';
import type { get_shipment_by_external_id_response_body } from '../models/get_shipment_by_external_id_response_body';
import type { get_shipment_by_id_response_body } from '../models/get_shipment_by_id_response_body';
import type { list_shipment_rates_response_body } from '../models/list_shipment_rates_response_body';
import type { list_shipments_response_body } from '../models/list_shipments_response_body';
import type { pickup_resource_id } from '../models/pickup_resource_id';
import type { se_id } from '../models/se_id';
import type { shipment_status } from '../models/shipment_status';
import type { shipments_sort_by } from '../models/shipments_sort_by';
import type { sort_dir } from '../models/sort_dir';
import type { tag_name } from '../models/tag_name';
import type { tag_shipment_response_body } from '../models/tag_shipment_response_body';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ShipmentsService {
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
    static listShipments(pickupId: pickup_resource_id, shipmentStatus?: shipment_status, batchId?: se_id, createdAtStart?: string, createdAtEnd?: string, modifiedAtStart?: string, modifiedAtEnd?: string, page?: number, pageSize?: number, salesOrderId?: string, sortDir?: sort_dir, shipmentNumber?: string, shipToName?: string, itemKeyword?: string, paymentDateStart?: string, paymentDateEnd?: string, storeId?: se_id, externalShipmentId?: string, sortBy?: shipments_sort_by): CancelablePromise<list_shipments_response_body>;
    /**
     * Create shipments
     * Create one or more shipments
     * @param requestBody
     * @returns create_shipments_response_body The request was a success.
     * @throws ApiError
     */
    static createShipments(requestBody: create_shipments_request_body): CancelablePromise<create_shipments_response_body>;
    /**
     * Get shipment by external id
     * Query Shipments created using your own custom ID convention using this endpoint
     * @param externalShipmentId
     * @returns get_shipment_by_external_id_response_body The request was a success.
     * @throws ApiError
     */
    static getShipmentByExternalId(externalShipmentId: string): CancelablePromise<get_shipment_by_external_id_response_body>;
    /**
     * Get shipment by id
     * Get an individual shipment based on its ID
     * @param shipmentId Shipment ID
     * @returns get_shipment_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getShipmentById(shipmentId: se_id): CancelablePromise<get_shipment_by_id_response_body>;
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
    static cancelShipments(shipmentId: se_id): CancelablePromise<void>;
    /**
     * Get shipment rates
     * Get Rates for the shipment information associated with the shipment ID
     * @param shipmentId Shipment ID
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @returns list_shipment_rates_response_body The request was a success.
     * @throws ApiError
     */
    static listShipmentRates(shipmentId: se_id, createdAtStart?: string): CancelablePromise<list_shipment_rates_response_body>;
    /**
     * Add tag to shipment
     * Add a tag to the shipment object
     * @param shipmentId Shipment ID
     * @param tagName
     * @returns tag_shipment_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static tagShipment(shipmentId: se_id, tagName: tag_name): CancelablePromise<tag_shipment_response_body>;
    /**
     * Remove tag from shipment
     * Remove an existing tag from the Shipment object
     * @param shipmentId Shipment ID
     * @param tagName
     * @returns void
     * @throws ApiError
     */
    static untagShipment(shipmentId: se_id, tagName: tag_name): CancelablePromise<void>;
}
