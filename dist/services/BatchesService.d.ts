import type { batch_status } from '../models/batch_status';
import type { batches_sort_by } from '../models/batches_sort_by';
import type { create_and_process_batch_request_body } from '../models/create_and_process_batch_request_body';
import type { create_batch_request_body } from '../models/create_batch_request_body';
import type { CreateBatchResponseBody } from '../models/CreateBatchResponseBody';
import type { get_batch_by_external_id_response_body } from '../models/get_batch_by_external_id_response_body';
import type { get_batch_by_id_response_body } from '../models/get_batch_by_id_response_body';
import type { list_batch_errors_response_body } from '../models/list_batch_errors_response_body';
import type { ListBatchesResponseBody } from '../models/ListBatchesResponseBody';
import type { process_batch_request_body } from '../models/process_batch_request_body';
import type { remove_from_batch_request_body } from '../models/remove_from_batch_request_body';
import type { se_id } from '../models/se_id';
import type { sort_dir } from '../models/sort_dir';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BatchesService {
    /**
     * List batches
     * List the batches associated with your ShipStation account.
     * @param status
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pageSize The number of results to return per response.
     * @param sortDir Controls the sort order of the query.
     * @param batchNumber Batch Number
     * @param sortBy
     * @returns ListBatchesResponseBody The request was a success.
     * @throws ApiError
     */
    static listBatches(status?: batch_status, page?: number, pageSize?: number, sortDir?: sort_dir, batchNumber?: string, sortBy?: batches_sort_by): CancelablePromise<ListBatchesResponseBody>;
    /**
     * Create a batch
     * Create a batch containing multiple labels.
     * @param requestBody
     * @returns CreateBatchResponseBody The requested object creation was a success.
     * @throws ApiError
     */
    static createBatch(requestBody: (create_batch_request_body | create_and_process_batch_request_body)): CancelablePromise<CreateBatchResponseBody>;
    /**
     * Get batch by external id
     * Retreive a batch using an external batch ID
     * @param externalBatchId
     * @returns get_batch_by_external_id_response_body The request was a success.
     * @throws ApiError
     */
    static getBatchByExternalId(externalBatchId: string): CancelablePromise<get_batch_by_external_id_response_body>;
    /**
     * Delete batch by id
     * Delete a batch based on its batch id. Sets its status to 'archived'.
     * @param batchId Batch ID
     * @returns void
     * @throws ApiError
     */
    static deleteBatch(batchId: se_id): CancelablePromise<void>;
    /**
     * Get batch by id
     * Get batch details for a specific batch id.
     * @param batchId Batch ID
     * @returns get_batch_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getBatchById(batchId: se_id): CancelablePromise<get_batch_by_id_response_body>;
    /**
     * Update batch status to 'archived' by id
     * Update a batch by id setting its status to 'archived'.
     * @param batchId Batch ID
     * @returns void
     * @throws ApiError
     */
    static updateBatch(batchId: se_id): CancelablePromise<void>;
    /**
     * Add to a batch
     * Add a shipment or rate to a batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static addToBatch(batchId: se_id, requestBody: create_and_process_batch_request_body): CancelablePromise<void>;
    /**
     * Get batch errors
     * Errors in batches must be handled differently from synchronous requests. You must retrieve the status of your batch by getting a batch and getting an overview of the statuses or by listing the batch errors.
     *
     * @param batchId Batch ID
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pagesize
     * @returns list_batch_errors_response_body The request was a success.
     * @throws ApiError
     */
    static listBatchErrors(batchId: se_id, page?: number, pagesize?: number): CancelablePromise<list_batch_errors_response_body>;
    /**
     * Process batch id labels
     * Create and purchase the labels for the shipments included in the batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static processBatch(batchId: se_id, requestBody: process_batch_request_body): CancelablePromise<void>;
    /**
     * Remove from batch
     * Remove specific shipment ids or rate ids from a batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static removeFromBatch(batchId: se_id, requestBody: remove_from_batch_request_body): CancelablePromise<void>;
}
