/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { se_id } from './se_id';
/**
 * A create manifest request body
 */
export type create_manifest_by_object_request_body = {
    /**
     * A string that uniquely identifies the carrier
     */
    carrier_id: se_id;
    /**
     * The list of label ids to exclude from the manifest
     */
    excluded_label_ids?: Array<se_id>;
    /**
     * The list of label ids to include for the manifest
     */
    label_ids?: Array<se_id>;
    /**
     * A string that uniquely identifies the warehouse
     */
    warehouse_id: se_id;
    /**
     * The ship date that the shipment will be sent out on
     */
    ship_date: string;
};

