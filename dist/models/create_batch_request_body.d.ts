import type { se_id } from './se_id';
/**
 * A create batch request body
 */
export type create_batch_request_body = {
    /**
     * A string that uniquely identifies the external batch
     */
    external_batch_id?: se_id;
    /**
     * Add custom messages for a particular batch
     */
    batch_notes?: string;
    /**
     * Array of shipment IDs used in the batch
     */
    shipment_ids?: Array<se_id>;
    /**
     * Array of rate IDs used in the batch
     */
    rate_ids?: Array<se_id>;
};
