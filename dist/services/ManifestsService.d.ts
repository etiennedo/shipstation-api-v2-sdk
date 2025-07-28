import type { create_manifest_by_object_request_body } from '../models/create_manifest_by_object_request_body';
import type { create_manifest_label_ids_request_body } from '../models/create_manifest_label_ids_request_body';
import type { create_manifest_response_body } from '../models/create_manifest_response_body';
import type { get_manifest_by_id_response_body } from '../models/get_manifest_by_id_response_body';
import type { list_manifests_response_body } from '../models/list_manifests_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ManifestsService {
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
    static listManifests(params: {
        warehouseId?: se_id;
        shipDateStart?: string;
        shipDateEnd?: string;
        createdAtStart?: string;
        createdAtEnd?: string;
        carrierId?: se_id;
        page?: number;
        pageSize?: number;
        labelIds?: Array<se_id>;
    }): CancelablePromise<list_manifests_response_body>;
    /**
     * Create manifest
     * Each ShipStation manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
     * rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.
     *
     * @param requestBody
     * @returns create_manifest_response_body The request was a success.
     * @throws ApiError
     */
    static createManifest(requestBody: (create_manifest_by_object_request_body | create_manifest_label_ids_request_body)): CancelablePromise<create_manifest_response_body>;
    /**
     * Get manifest by id
     * Get Manifest By Id
     * @param manifestId The Manifest Id
     * @returns get_manifest_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getManifestById(manifestId: se_id): CancelablePromise<get_manifest_by_id_response_body>;
}
