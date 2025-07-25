/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pagination_link } from './pagination_link';
import type { shipment } from './shipment';
/**
 * A list shipment response body
 */
export type list_shipments_response_body = {
    /**
     * The list of shipments returned by the api call
     */
    readonly shipments: Array<shipment>;
    /**
     * Total number of shipments returned by the api call
     */
    readonly total: number;
    readonly page: number;
    readonly pages: number;
    readonly links: pagination_link;
};

