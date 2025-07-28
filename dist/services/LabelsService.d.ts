import type { create_label_from_rate_request_body } from '../models/create_label_from_rate_request_body';
import type { create_label_from_rate_response_body } from '../models/create_label_from_rate_response_body';
import type { create_label_from_shipment_request_body } from '../models/create_label_from_shipment_request_body';
import type { create_label_from_shipment_response_body } from '../models/create_label_from_shipment_response_body';
import type { create_label_request_body } from '../models/create_label_request_body';
import type { create_label_response_body } from '../models/create_label_response_body';
import type { create_return_label_request_body } from '../models/create_return_label_request_body';
import type { create_return_label_response_body } from '../models/create_return_label_response_body';
import type { get_label_by_id_response_body } from '../models/get_label_by_id_response_body';
import type { get_tracking_log_from_label_response_body } from '../models/get_tracking_log_from_label_response_body';
import type { label_download_type } from '../models/label_download_type';
import type { label_status } from '../models/label_status';
import type { list_labels_response_body } from '../models/list_labels_response_body';
import type { se_id } from '../models/se_id';
import type { service_code } from '../models/service_code';
import type { sort_dir } from '../models/sort_dir';
import type { void_label_response_body } from '../models/void_label_response_body';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LabelsService {
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
    static listLabels(params: {
        labelStatus?: label_status;
        serviceCode?: service_code;
        carrierId?: se_id;
        trackingNumber?: string;
        batchId?: se_id;
        rateId?: se_id;
        shipmentId?: se_id;
        warehouseId?: se_id;
        createdAtStart?: string;
        createdAtEnd?: string;
        page?: number;
        pageSize?: number;
        sortDir?: sort_dir;
        sortBy?: 'modified_at' | 'created_at';
    }): CancelablePromise<list_labels_response_body>;
    /**
     * Purchase label
     * Purchase and print a label for shipment.
     * @param requestBody
     * @returns create_label_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabel(requestBody: create_label_request_body): CancelablePromise<create_label_response_body>;
    /**
     * Purchase label with rate id
     * When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used to generate a label without having to refill in the shipment information repeatedly.
     *
     * @param rateId Rate ID
     * @param requestBody
     * @returns create_label_from_rate_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabelFromRate(rateId: se_id, requestBody: create_label_from_rate_request_body): CancelablePromise<create_label_from_rate_response_body>;
    /**
     * Purchase label with shipment id
     * Purchase a label using a shipment ID that has already been created with the desired address and package info.
     *
     * @param shipmentId Shipment ID
     * @param requestBody
     * @returns create_label_from_shipment_response_body The requested object creation was a success.
     * @throws ApiError
     */
    static createLabelFromShipment(shipmentId: se_id, requestBody: create_label_from_shipment_request_body): CancelablePromise<create_label_from_shipment_response_body>;
    /**
     * Get label by id
     * Retrieve a specific label by its label id.
     * @param labelId Label ID
     * @param labelDownloadType
     * @returns get_label_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getLabelById(labelId: se_id, labelDownloadType?: label_download_type): CancelablePromise<get_label_by_id_response_body>;
    /**
     * Create a return label
     * Create a return label for a previously created outbound label. The return label will automatically swap the ship to and ship from addresses from the original label.
     * @param labelId Label ID
     * @param requestBody
     * @returns create_return_label_response_body The request was a success.
     * @throws ApiError
     */
    static createReturnLabel(labelId: se_id, requestBody: create_return_label_request_body): CancelablePromise<create_return_label_response_body>;
    /**
     * Get label tracking information
     * Retrieve the label's tracking details.
     * @param labelId Label ID
     * @returns get_tracking_log_from_label_response_body The request was a success.
     * @throws ApiError
     */
    static getTrackingLogFromLabel(labelId: se_id): CancelablePromise<get_tracking_log_from_label_response_body>;
    /**
     * Void a label by id
     * Void a specific label using its label id. For labels that are paid for at time of label creation, this will also request a refund from the carrier.
     * @param labelId Label ID
     * @returns void_label_response_body The request was a success.
     * @throws ApiError
     */
    static voidLabel(labelId: se_id): CancelablePromise<void_label_response_body>;
}
