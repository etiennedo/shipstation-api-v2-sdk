import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProductsService {
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
    static listProducts(params: {
        sku?: string;
        name?: string;
        active?: boolean;
        pageSize?: number;
        page?: number;
    }): CancelablePromise<{
        products?: Array<{
            /**
             * Unique identifier for the product
             */
            product_id?: number;
            /**
             * Stock Keeping Unit identifier
             */
            sku?: string;
            /**
             * Product name
             */
            name?: string;
            /**
             * Universal Product Code
             */
            upc?: string | null;
            /**
             * URL to product thumbnail image
             */
            thumbnail_url?: string | null;
            price?: {
                /**
                 * Currency code
                 */
                currency?: string;
                /**
                 * Price amount
                 */
                amount?: number;
            };
            dimensions?: {
                /**
                 * Unit of measurement
                 */
                unit?: string;
                /**
                 * Length dimension
                 */
                length?: number;
                /**
                 * Width dimension
                 */
                width?: number;
                /**
                 * Height dimension
                 */
                height?: number;
            };
            weight?: {
                /**
                 * Weight value
                 */
                value?: number;
                /**
                 * Weight unit
                 */
                unit?: string;
            };
            /**
             * Internal notes about the product
             */
            internal_notes?: string | null;
            /**
             * Fulfillment SKU
             */
            fulfillment_sku?: string | null;
            /**
             * Date when product was created
             */
            create_date?: string;
            /**
             * Date when product was last modified
             */
            modify_date?: string;
            /**
             * Whether the product is active
             */
            active?: boolean;
            product_category?: {
                product_category_id?: number;
                name?: string;
            } | null;
            /**
             * Preset group
             */
            preset_group?: string | null;
            /**
             * Warehouse location
             */
            warehouse_location?: string | null;
            /**
             * Default carrier code
             */
            default_carrier_code?: string | null;
            /**
             * Default service code
             */
            default_service_code?: string | null;
            /**
             * Default package code
             */
            default_package_code?: string | null;
            /**
             * Default international carrier code
             */
            default_intl_carrier_code?: string | null;
            /**
             * Default international service code
             */
            default_intl_service_code?: string | null;
            /**
             * Default international package code
             */
            default_intl_package_code?: string | null;
            /**
             * Default confirmation type
             */
            default_confirmation?: string | null;
            /**
             * Default international confirmation type
             */
            default_intl_confirmation?: string | null;
            /**
             * Customs description
             */
            customs_description?: string | null;
            /**
             * Customs value
             */
            customs_value?: number | null;
            /**
             * Customs tariff number
             */
            customs_tariff_no?: string | null;
            /**
             * Customs country code
             */
            customs_country_code?: string | null;
            /**
             * Whether customs is required
             */
            no_customs?: boolean;
            tags?: Array<{
                tag_id?: number;
                name?: string;
                color?: string;
            }> | null;
            aliases?: Array<{
                store_id?: number;
                sku_alias?: string;
            }> | null;
            /**
             * Product type
             */
            product_type?: string | null;
            /**
             * Whether the product is returnable
             */
            is_returnable?: boolean;
            /**
             * Whether to override the product name
             */
            should_override_name?: boolean | null;
            /**
             * Whether the product is a bundle
             */
            is_bundle?: boolean | null;
            bundle_components?: Array<{
                bundle_product_id?: number;
                component_product_id?: number;
                sku?: string;
                quantity?: number;
                active?: boolean;
            }> | null;
            /**
             * Auto split option
             */
            auto_split_option?: string;
            /**
             * Auto split custom quantity
             */
            auto_split_custom_quantity?: number | null;
        }>;
        /**
         * Total number of products
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
    }>;
}
