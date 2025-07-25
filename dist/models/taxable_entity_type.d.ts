/**
 * The taxable entity type for this tax item. Valid values include the following
 *
 * |Value       |Description
 * |:---------  |:-----------------------------------------------------
 * |`shipper`   | The shipper is responsible for this tax.
 * |`recipient` | The recipient of the shipment is responsible for this tax.
 * |`ior`       | The importer of records is responsible for tax.
 *
 */
export declare enum taxable_entity_type {
    SHIPPER = "shipper",
    RECIPIENT = "recipient",
    IOR = "ior"
}
