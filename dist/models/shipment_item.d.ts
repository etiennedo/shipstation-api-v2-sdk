import type { order_source_name } from './order_source_name';
import type { weight } from './weight';
/**
 * A shipment item
 */
export type shipment_item = {
    /**
     * item name
     */
    name?: string;
    /**
     * sales order id
     */
    sales_order_id?: string;
    /**
     * sales order item id
     */
    sales_order_item_id?: string;
    /**
     * The quantity of this item included in the shipment
     */
    quantity?: number;
    /**
     * Item Stock Keeping Unit
     */
    sku?: string;
    /**
     * Bundle SKU for the item
     */
    bundle_sku?: string;
    /**
     * external order id
     */
    external_order_id?: string;
    /**
     * external order item id
     */
    external_order_item_id?: string;
    /**
     * Amazon Standard Identification Number
     */
    asin?: string;
    order_source_code?: order_source_name;
    /**
     * Unique identifier for the item
     */
    item_id?: string;
    /**
     * Allocation status of the item
     */
    allocation_status?: string;
    /**
     * URL to the item image
     */
    image_url?: string;
    /**
     * Weight of the individual item
     */
    weight?: weight;
    /**
     * Unit price of the item
     */
    unit_price?: number;
    /**
     * Tax amount for the item
     */
    tax_amount?: number;
    /**
     * Shipping amount for the item
     */
    shipping_amount?: number;
    /**
     * Inventory location of the item
     */
    inventory_location?: string;
    /**
     * Item options/variants
     */
    options?: Array<{
        /**
         * Option name
         */
        name?: string;
        /**
         * Option value
         */
        value?: string;
    }>;
    /**
     * Product ID
     */
    product_id?: string;
    /**
     * Fulfillment SKU
     */
    fullfilment_sku?: string;
    /**
     * Universal Product Code
     */
    upc?: string;
};
