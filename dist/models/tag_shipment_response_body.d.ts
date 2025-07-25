import type { se_id } from './se_id';
import type { tag } from './tag';
/**
 * A shipment add tag response body
 */
export type tag_shipment_response_body = {
    /**
     * A string that uniquely identifies the shipment
     */
    readonly shipment_id: se_id;
    /**
     * The tag that is now associated with this shipment
     */
    readonly tag: tag;
};
