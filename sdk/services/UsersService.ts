/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * List users
     * @param status Filter users by their status
     * @param pageSize The number of results to return per page
     * @param page The page number to return
     * @returns any List of users
     * @throws ApiError
     */
    public static listUsers(
        status?: 'active' | 'inactive' | 'locked_out' | 'email_lock',
        pageSize: number = 25,
        page: number = 1,
    ): CancelablePromise<{
        users?: Array<{
            /**
             * Unique identifier for the user
             */
            user_id?: string;
            /**
             * Full name of the user
             */
            name?: string;
            /**
             * Username for the user
             */
            username?: string;
            /**
             * Email address of the user
             */
            email?: string;
            /**
             * Current status of the user
             */
            status?: string;
            /**
             * Date of the user's last login
             */
            last_login_at?: string;
            /**
             * Date when the user was created
             */
            created_at?: string;
        }>;
        /**
         * Total number of users
         */
        total?: number;
        /**
         * Current page number
         */
        page?: number;
        /**
         * Total number of pages
         */
        pages?: number;
        links?: {
            first?: {
                /**
                 * URL to the first page
                 */
                href?: string;
            };
            last?: {
                /**
                 * URL to the last page
                 */
                href?: string;
            };
            prev?: {
                /**
                 * URL to the previous page
                 */
                href?: string;
            };
            next?: {
                /**
                 * URL to the next page
                 */
                href?: string;
            };
        };
    }> {
        return __request(OpenAPI, {
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
