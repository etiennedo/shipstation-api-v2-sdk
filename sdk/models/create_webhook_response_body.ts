/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { se_id } from './se_id';
import type { url } from './url';
import type { webhook } from './webhook';
import type { webhook_event } from './webhook_event';
/**
 * A webhook response body
 */
export type create_webhook_response_body = (webhook & {
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

