/**
 * The source of the error, as indicated by the name this informs us if the API call failed because of the
 * carrier, the order source, or the ShipStation API itself.
 *
 */
export declare enum error_source {
    CARRIER = "carrier",
    ORDER_SOURCE = "order_source",
    SHIP_STATION = "ShipStation"
}
