"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label_layout = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
 *
 */
var label_layout;
(function (label_layout) {
    label_layout["_4X6"] = "4x6";
    label_layout["LETTER"] = "letter";
})(label_layout || (exports.label_layout = label_layout = {}));
