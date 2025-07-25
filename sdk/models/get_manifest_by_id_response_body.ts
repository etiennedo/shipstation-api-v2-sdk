/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { manifest } from './manifest';
import type { manifest_download } from './manifest_download';
import type { se_id } from './se_id';
/**
 * A get manifest by id response body
 */
export type get_manifest_by_id_response_body = (manifest & {
    /**
     * A string that uniquely identifies the manifest
     */
    readonly manifest_id: se_id;
    /**
     * A string that uniquely identifies the form
     */
    readonly form_id: se_id;
    /**
     * The date-time that the manifest was created
     */
    readonly created_at: string;
    /**
     * The date-time that the manifests shipments will be picked up
     */
    readonly ship_date: string;
    /**
     * The number of shipments that are included in this manifest
     */
    readonly shipments: number;
    /**
     * An array of the label ids used in this manifest.
     */
    readonly label_ids: Array<se_id>;
    /**
     * A string that uniquely identifies the warehouse
     */
    readonly warehouse_id: se_id;
    /**
     * A string that uniquely identifies the submission
     */
    readonly submission_id: string;
    /**
     * A string that uniquely identifies the carrier
     */
    readonly carrier_id: se_id;
    readonly manifest_download: manifest_download;
});

