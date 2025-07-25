import type { package_type } from './package_type';
/**
 * A list package types response body
 */
export type list_package_types_response_body = {
    /**
     * An array of custom package types
     */
    readonly packages?: Array<package_type>;
};
