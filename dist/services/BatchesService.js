"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BatchesService {
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
    static listBatches(params) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createBatch(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBatchByExternalId(externalBatchId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteBatch(batchId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBatchById(batchId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateBatch(batchId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static addToBatch(batchId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static listBatchErrors(batchId, page = 1, pagesize) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static processBatch(batchId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static removeFromBatch(batchId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.BatchesService = BatchesService;
