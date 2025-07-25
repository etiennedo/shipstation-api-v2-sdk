/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { se_id } from './se_id';
/**
 * A warehouse
 */
export type warehouse = {
    /**
     * A string that uniquely identifies the warehouse
     */
    readonly warehouse_id?: se_id;
    /**
     * Designates which single warehouse is the default on the account
     */
    is_default?: boolean;
    /**
     * Name of the warehouse
     */
    name?: string;
    /**
     * Timestamp that indicates when the warehouse was created
     */
    readonly created_at?: string;
    /**
     * The origin address of the warehouse
     */
    origin_address?: address;
    /**
     * The return address associated with the warehouse
     */
    return_address?: address;
};

