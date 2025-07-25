/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { se_id } from './se_id';
/**
 * A modify batch object
 */
export type modify_batch = {
    /**
     * The Shipment Ids to be modified on the batch
     */
    shipment_ids?: Array<se_id>;
    /**
     * Array of Rate IDs to be modifed on the batch
     */
    rate_ids?: Array<se_id>;
};

