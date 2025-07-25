import type { manifest_request_status } from './manifest_request_status';
import type { se_id } from './se_id';
/**
 * A reference to the manifest request
 */
export type manifest_requests = {
    /**
     * A string that uniquely identifies a manifest request
     */
    readonly manifest_request_id?: se_id;
    status?: manifest_request_status;
};
