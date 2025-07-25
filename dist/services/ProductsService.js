"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProductsService {
    /**
     * List products
     * @param sku Filter products by SKU
     * @param name Filter products by name
     * @param active Filter products by active status
     * @param pageSize The number of results to return per page
     * @param page The page number to return
     * @returns any List of products
     * @throws ApiError
     */
    static listProducts(sku, name, active, pageSize = 100, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/products',
            query: {
                'sku': sku,
                'name': name,
                'active': active,
                'page_size': pageSize,
                'page': page,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.ProductsService = ProductsService;
