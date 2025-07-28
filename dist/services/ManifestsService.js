"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ManifestsService {
    /**
     * List manifests
     * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
     * @param warehouseId Warehouse ID
     * @param shipDateStart ship date start range
     * @param shipDateEnd ship date end range
     * @param createdAtStart Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @param createdAtEnd Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     * @param carrierId Carrier ID
     * @param page Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @param pageSize The number of results to return per response.
     * @param labelIds
     * @returns list_manifests_response_body The request was a success.
     * @throws ApiError
     */
    static listManifests(params) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/manifests',
            query: {
                'warehouse_id': params.warehouseId,
                'ship_date_start': params.shipDateStart,
                'ship_date_end': params.shipDateEnd,
                'created_at_start': params.createdAtStart,
                'created_at_end': params.createdAtEnd,
                'carrier_id': params.carrierId,
                'page': params.page,
                'page_size': params.pageSize,
                'label_ids': params.labelIds,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create manifest
     * Each ShipStation manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
     * rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.
     *
     * @param requestBody
     * @returns create_manifest_response_body The request was a success.
     * @throws ApiError
     */
    static createManifest(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/manifests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get manifest by id
     * Get Manifest By Id
     * @param manifestId The Manifest Id
     * @returns get_manifest_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getManifestById(manifestId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/manifests/{manifest_id}',
            path: {
                'manifest_id': manifestId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`manifest\` corresponds to the \`manifest_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.ManifestsService = ManifestsService;
