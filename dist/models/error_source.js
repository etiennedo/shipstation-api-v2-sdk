"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error_source = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The source of the error, as indicated by the name this informs us if the API call failed because of the
 * carrier, the order source, or the ShipStation API itself.
 *
 */
var error_source;
(function (error_source) {
    error_source["CARRIER"] = "carrier";
    error_source["ORDER_SOURCE"] = "order_source";
    error_source["SHIP_STATION"] = "ShipStation";
})(error_source || (exports.error_source = error_source = {}));
