/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { manifest_download } from './manifest_download';
import type { se_id } from './se_id';
/**
 * Deprecated manifest resource
 */
export type deprecated_manifest = {
    /**
     * A string that uniquely identifies the manifest
     * @deprecated
     */
    manifest_id?: se_id;
    /**
     * A string that uniquely identifies the form
     * @deprecated
     */
    form_id?: se_id;
    /**
     * The date-time that the manifest was created
     * @deprecated
     */
    created_at?: string;
    /**
     * The date-time that the manifests shipments will be picked up
     * @deprecated
     */
    ship_date?: string;
    /**
     * The number of shipments that are included in this manifest
     * @deprecated
     */
    readonly shipments?: number;
    /**
     * A string that uniquely identifies the warehouse
     * @deprecated
     */
    warehouse_id?: se_id;
    /**
     * A string that uniquely identifies the submission
     * @deprecated
     */
    submission_id?: string;
    /**
     * A string that uniquely identifies the carrier
     * @deprecated
     */
    carrier_id?: se_id;
    /**
     * @deprecated
     */
    manifest_download?: manifest_download;
    /**
     * An array of the label ids used in this manifest.
     * @deprecated
     */
    readonly label_ids?: Array<se_id>;
};

