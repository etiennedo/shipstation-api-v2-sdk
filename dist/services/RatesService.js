"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RatesService {
    /**
     * Get shipping rates
     * It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
     * so we provide functionality to show you all your options!
     *
     * @param requestBody
     * @returns calculate_rates_response_body The request was a success.
     * @throws ApiError
     */
    static calculateRates(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static estimateRates(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getRateById(rateId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.RatesService = RatesService;
