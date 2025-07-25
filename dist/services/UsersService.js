"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UsersService {
    /**
     * List users
     * @param status Filter users by their status
     * @param pageSize The number of results to return per page
     * @param page The page number to return
     * @returns any List of users
     * @throws ApiError
     */
    static listUsers(status, pageSize = 25, page = 1) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/users',
            query: {
                'status': status,
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
exports.UsersService = UsersService;
