/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { create_webhook_request_body } from '../models/create_webhook_request_body';
import type { create_webhook_response_body } from '../models/create_webhook_response_body';
import type { get_webhook_by_id_response_body } from '../models/get_webhook_by_id_response_body';
import type { list_webhooks_response_body } from '../models/list_webhooks_response_body';
import type { se_id } from '../models/se_id';
import type { update_webhook_request_body } from '../models/update_webhook_request_body';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
    /**
     * List webhooks
     * List all webhooks currently enabled for the account.
     * @returns list_webhooks_response_body The request was a success.
     * @throws ApiError
     */
    public static listWebhooks(): CancelablePromise<list_webhooks_response_body> {
        return __request(OpenAPI, {
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
    public static createWebhook(
        requestBody: create_webhook_request_body,
    ): CancelablePromise<create_webhook_response_body> {
        return __request(OpenAPI, {
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
    public static getWebhookById(
        webhookId: se_id,
    ): CancelablePromise<get_webhook_by_id_response_body> {
        return __request(OpenAPI, {
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
    public static updateWebhook(
        webhookId: se_id,
        requestBody: update_webhook_request_body,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static deleteWebhook(
        webhookId: se_id,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
