"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxable_entity_type = void 0;
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
var taxable_entity_type;
(function (taxable_entity_type) {
    taxable_entity_type["SHIPPER"] = "shipper";
    taxable_entity_type["RECIPIENT"] = "recipient";
    taxable_entity_type["IOR"] = "ior";
})(taxable_entity_type || (exports.taxable_entity_type = taxable_entity_type = {}));
