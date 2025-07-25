/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { se_id } from './se_id';
import type { warehouse } from './warehouse';
/**
 * A get warehouse by id response body
 */
export type get_warehouse_by_id_response_body = (warehouse & {
    /**
     * A string that uniquely identifies the warehouse
     */
    readonly warehouse_id: se_id;
    /**
     * Name of the warehouse
     */
    name: string;
    /**
     * Timestamp that indicates when the warehouse was created
     */
    readonly created_at: string;
    /**
     * The origin address of the warehouse
     */
    origin_address: address;
    /**
     * The return address associated with the warehouse
     */
    return_address: address;
});

