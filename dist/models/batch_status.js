"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batch_status = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The possible batch status values
 */
var batch_status;
(function (batch_status) {
    batch_status["OPEN"] = "open";
    batch_status["QUEUED"] = "queued";
    batch_status["PROCESSING"] = "processing";
    batch_status["COMPLETED"] = "completed";
    batch_status["COMPLETED_WITH_ERRORS"] = "completed_with_errors";
    batch_status["ARCHIVED"] = "archived";
    batch_status["NOTIFYING"] = "notifying";
    batch_status["INVALID"] = "invalid";
})(batch_status || (exports.batch_status = batch_status = {}));
