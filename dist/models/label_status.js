"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label_status = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The possible statuses that a [shipping label] can be in.
 *
 * |Status       |Description
 * |:------------|:-----------------------------------------------------
 * |`processing` |When labels are created in a [batch], it may take a few minutes for all of the labels in the batch to be created.  During this period, they will be in `processing` status.
 * |`completed`  |The label was successfully created
 * |`error`      |The label could not be created due to an error, such as an invalid delivery address
 * |`voided`     |The label has been [voided]
 *
 */
var label_status;
(function (label_status) {
    label_status["PROCESSING"] = "processing";
    label_status["COMPLETED"] = "completed";
    label_status["ERROR"] = "error";
    label_status["VOIDED"] = "voided";
})(label_status || (exports.label_status = label_status = {}));
