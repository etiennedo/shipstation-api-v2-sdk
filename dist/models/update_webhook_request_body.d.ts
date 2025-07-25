import type { url } from './url';
import type { webhook_header } from './webhook_header';
/**
 * An update webhook request body
 */
export type update_webhook_request_body = {
    /**
     * The url that the wehbook sends the request
     */
    url?: url;
    /**
     * Array of custom webhook headers
     */
    headers?: Array<webhook_header>;
};
