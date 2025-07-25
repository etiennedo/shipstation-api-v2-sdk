import type { create_webhook_request_body } from '../models/create_webhook_request_body';
import type { create_webhook_response_body } from '../models/create_webhook_response_body';
import type { get_webhook_by_id_response_body } from '../models/get_webhook_by_id_response_body';
import type { list_webhooks_response_body } from '../models/list_webhooks_response_body';
import type { se_id } from '../models/se_id';
import type { update_webhook_request_body } from '../models/update_webhook_request_body';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhooksService {
    /**
     * List webhooks
     * List all webhooks currently enabled for the account.
     * @returns list_webhooks_response_body The request was a success.
     * @throws ApiError
     */
    static listWebhooks(): CancelablePromise<list_webhooks_response_body>;
    /**
     * Create a webhook
     * Create a webook for specific events in the environment.
     * @param requestBody
     * @returns create_webhook_response_body The request was a success.
     * @throws ApiError
     */
    static createWebhook(requestBody: create_webhook_request_body): CancelablePromise<create_webhook_response_body>;
    /**
     * Get webhook by id
     * Retrieve individual webhook by an ID
     * @param webhookId Webhook ID
     * @returns get_webhook_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getWebhookById(webhookId: se_id): CancelablePromise<get_webhook_by_id_response_body>;
    /**
     * Update a webhook
     * Update the webhook url property
     * @param webhookId Webhook ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateWebhook(webhookId: se_id, requestBody: update_webhook_request_body): CancelablePromise<void>;
    /**
     * Delete webhook by id
     * Delete a webhook
     * @param webhookId Webhook ID
     * @returns void
     * @throws ApiError
     */
    static deleteWebhook(webhookId: se_id): CancelablePromise<void>;
}
