"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WebhooksService {
    /**
     * List webhooks
     * List all webhooks currently enabled for the account.
     * @returns list_webhooks_response_body The request was a success.
     * @throws ApiError
     */
    static listWebhooks() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/environment/webhooks',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Create a webhook
     * Create a webook for specific events in the environment.
     * @param requestBody
     * @returns create_webhook_response_body The request was a success.
     * @throws ApiError
     */
    static createWebhook(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v2/environment/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                409: `The request conflicts with an existing resource.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get webhook by id
     * Retrieve individual webhook by an ID
     * @param webhookId Webhook ID
     * @returns get_webhook_by_id_response_body The request was a success.
     * @throws ApiError
     */
    static getWebhookById(webhookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/environment/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Update a webhook
     * Update the webhook url property
     * @param webhookId Webhook ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateWebhook(webhookId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v2/environment/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Delete webhook by id
     * Delete a webhook
     * @param webhookId Webhook ID
     * @returns void
     * @throws ApiError
     */
    static deleteWebhook(webhookId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v2/environment/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.WebhooksService = WebhooksService;
