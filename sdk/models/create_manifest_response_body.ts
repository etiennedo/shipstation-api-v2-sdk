/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deprecated_manifest } from './deprecated_manifest';
import type { error_with_label_id_response_body } from './error_with_label_id_response_body';
import type { manifest_download } from './manifest_download';
import type { manifest_requests } from './manifest_requests';
import type { manifests } from './manifests';
import type { se_id } from './se_id';
/**
 * A create manifest response body
 */
export type create_manifest_response_body = (manifests & manifest_requests & deprecated_manifest & error_with_label_id_response_body & {
    /**
     * A string that uniquely identifies the manifest
     * @deprecated
     */
    manifest_id: se_id;
    /**
     * A string that uniquely identifies the form
     * @deprecated
     */
    form_id: se_id;
    /**
     * The date-time that the manifest was created
     * @deprecated
     */
    created_at: string;
    /**
     * The date-time that the manifests shipments will be picked up
     * @deprecated
     */
    ship_date: string;
    /**
     * The number of shipments that are included in this manifest
     * @deprecated
     */
    readonly shipments: number;
    /**
     * A string that uniquely identifies the warehouse
     * @deprecated
     */
    warehouse_id: se_id;
    /**
     * A string that uniquely identifies the submission
     * @deprecated
     */
    submission_id: string;
    /**
     * A string that uniquely identifies the carrier
     * @deprecated
     */
    carrier_id: se_id;
    /**
     * @deprecated
     */
    manifest_download: manifest_download;
});

