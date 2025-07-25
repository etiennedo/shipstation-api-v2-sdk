import type { se_id } from './se_id';
/**
 * A create manifest request body
 */
export type create_manifest_label_ids_request_body = {
    /**
     * The list of label ids to include in the manifest
     */
    label_ids: Array<se_id>;
};
