"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label_void_failure_reason = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The possible normalized reasons a label void request may not have been approved
 */
var label_void_failure_reason;
(function (label_void_failure_reason) {
    label_void_failure_reason["UNKNOWN"] = "unknown";
    label_void_failure_reason["UNSPECIFIED"] = "unspecified";
    label_void_failure_reason["VALIDATION_FAILED"] = "validation_failed";
    label_void_failure_reason["LABEL_NOT_FOUND_WITHIN_VOID_PERIOD"] = "label_not_found_within_void_period";
    label_void_failure_reason["LABEL_ALREADY_USED"] = "label_already_used";
    label_void_failure_reason["LABEL_ALREADY_VOIDED"] = "label_already_voided";
    label_void_failure_reason["CONTACT_CARRIER"] = "contact_carrier";
})(label_void_failure_reason || (exports.label_void_failure_reason = label_void_failure_reason = {}));
