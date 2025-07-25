/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BatchesService {
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
    public static listBatches(params: {
        status?: batch_status;
        page?: number;
        pageSize?: number;
        sortDir?: sort_dir;
        batchNumber?: string;
        sortBy?: batches_sort_by;
    }): CancelablePromise<ListBatchesResponseBody> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/batches',
            query: {
                'status': params.status,
                'page': params.page,
                'page_size': params.pageSize,
                'sort_dir': params.sortDir,
                'batch_number': params.batchNumber,
                'sort_by': params.sortBy,
            },
            errors: {
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create a batch
     * Create a batch containing multiple labels.
     * @param requestBody
     * @returns CreateBatchResponseBody The requested object creation was a success.
     * @throws ApiError
     */
    public static createBatch(
        requestBody: (create_batch_request_body | create_and_process_batch_request_body),
    ): CancelablePromise<CreateBatchResponseBody> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/batches',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get batch by external id
     * Retreive a batch using an external batch ID
     * @param externalBatchId
     * @returns get_batch_by_external_id_response_body The request was a success.
     * @throws ApiError
     */
    public static getBatchByExternalId(
        externalBatchId: string,
    ): CancelablePromise<get_batch_by_external_id_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/batches/external_batch_id/{external_batch_id}',
            path: {
                'external_batch_id': externalBatchId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`batch\` corresponds to the \`external_batch_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Delete batch by id
     * Delete a batch based on its batch id. Sets its status to 'archived'.
     * @param batchId Batch ID
     * @returns void
     * @throws ApiError
     */
    public static deleteBatch(
        batchId: se_id,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/batches/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get batch by id
     * Get batch details for a specific batch id.
     * @param batchId Batch ID
     * @returns get_batch_by_id_response_body The request was a success.
     * @throws ApiError
     */
    public static getBatchById(
        batchId: se_id,
    ): CancelablePromise<get_batch_by_id_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/batches/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`batch\` corresponds to the \`batch_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Update batch status to 'archived' by id
     * Update a batch by id setting its status to 'archived'.
     * @param batchId Batch ID
     * @returns void
     * @throws ApiError
     */
    public static updateBatch(
        batchId: se_id,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/batches/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Add to a batch
     * Add a shipment or rate to a batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static addToBatch(
        batchId: se_id,
        requestBody: create_and_process_batch_request_body,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/batches/{batch_id}/add',
            path: {
                'batch_id': batchId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`batch\` corresponds to the \`batch_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
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
    public static listBatchErrors(
        batchId: se_id,
        page: number = 1,
        pagesize?: number,
    ): CancelablePromise<list_batch_errors_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/batches/{batch_id}/errors',
            path: {
                'batch_id': batchId,
            },
            query: {
                'page': page,
                'pagesize': pagesize,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Process batch id labels
     * Create and purchase the labels for the shipments included in the batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static processBatch(
        batchId: se_id,
        requestBody: process_batch_request_body,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/batches/{batch_id}/process/labels',
            path: {
                'batch_id': batchId,
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
     * Remove from batch
     * Remove specific shipment ids or rate ids from a batch.
     * @param batchId Batch ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static removeFromBatch(
        batchId: se_id,
        requestBody: remove_from_batch_request_body,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/batches/{batch_id}/remove',
            path: {
                'batch_id': batchId,
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
}
