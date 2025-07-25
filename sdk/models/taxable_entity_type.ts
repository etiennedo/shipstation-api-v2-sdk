/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export enum taxable_entity_type {
    SHIPPER = 'shipper',
    RECIPIENT = 'recipient',
    IOR = 'ior',
}
