import type { se_id } from './se_id';
import type { url } from './url';
import type { webhook_event } from './webhook_event';
import type { webhook_header } from './webhook_header';
/**
 * A webhook
 */
export type webhook = {
    /**
     * A string that uniquely identifies the webhook
     */
    readonly webhook_id?: se_id;
    /**
     * The url that the webhook sends the request to
     */
    url?: url;
    event?: webhook_event;
    /**
     * Array of custom webhook headers
     */
    headers?: Array<webhook_header>;
};
