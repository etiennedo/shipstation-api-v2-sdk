import type { url } from './url';
import type { webhook_event } from './webhook_event';
import type { webhook_header } from './webhook_header';
/**
 * A create webhook request body
 */
export type create_webhook_request_body = {
    event: webhook_event;
    /**
     * The url that the webhook sends the request to
     */
    url: url;
    /**
     * Array of custom webhook headers
     */
    headers?: Array<webhook_header>;
};
