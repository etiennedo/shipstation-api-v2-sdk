import type { se_id } from './se_id';
import type { url } from './url';
import type { webhook } from './webhook';
import type { webhook_event } from './webhook_event';
/**
 * A get webhook id response body
 */
export type get_webhook_by_id_response_body = (webhook & {
    /**
     * A string that uniquely identifies the webhook
     */
    readonly webhook_id: se_id;
    /**
     * The url that the webhook sends the request to
     */
    url: url;
    event: webhook_event;
});
