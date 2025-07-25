/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { calculate_rates_request_body } from '../models/calculate_rates_request_body';
import type { calculate_rates_response_body } from '../models/calculate_rates_response_body';
import type { estimate_rates_request_body } from '../models/estimate_rates_request_body';
import type { estimate_rates_response_body } from '../models/estimate_rates_response_body';
import type { get_rate_by_id_response_body } from '../models/get_rate_by_id_response_body';
import type { se_id } from '../models/se_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RatesService {
    /**
     * Get shipping rates
     * It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
     * so we provide functionality to show you all your options!
     *
     * @param requestBody
     * @returns calculate_rates_response_body The request was a success.
     * @throws ApiError
     */
    public static calculateRates(
        requestBody: calculate_rates_request_body,
    ): CancelablePromise<calculate_rates_response_body> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Estimate rates
     * Get Rate Estimates
     * @param requestBody
     * @returns estimate_rates_response_body The request was a success.
     * @throws ApiError
     */
    public static estimateRates(
        requestBody: estimate_rates_request_body,
    ): CancelablePromise<estimate_rates_response_body> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rates/estimate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request contained errors.`,
                500: `The request was successful.`,
            },
        });
    }
    /**
     * Get rate by id
     * Retrieve a previously queried rate by its ID
     * @param rateId Rate ID
     * @returns get_rate_by_id_response_body The request was a success.
     * @throws ApiError
     */
    public static getRateById(
        rateId: se_id,
    ): CancelablePromise<get_rate_by_id_response_body> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rates/{rate_id}',
            path: {
                'rate_id': rateId,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The API returns a 404 response when no \`rate\` corresponds to the \`rate_id\` provided.`,
                500: `The request was successful.`,
            },
        });
    }
}
