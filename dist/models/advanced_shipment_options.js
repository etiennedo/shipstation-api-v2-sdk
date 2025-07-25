"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advanced_shipment_options = void 0;
var advanced_shipment_options;
(function (advanced_shipment_options) {
    /**
     * An indicator that will tell the carrier and HMRC the type of movement for the shipment.
     */
    let movement_indicator;
    (function (movement_indicator) {
        movement_indicator["C2C"] = "c2c";
        movement_indicator["B2C"] = "b2c";
        movement_indicator["C2B"] = "c2b";
        movement_indicator["B2B"] = "b2b";
    })(movement_indicator = advanced_shipment_options.movement_indicator || (advanced_shipment_options.movement_indicator = {}));
})(advanced_shipment_options || (exports.advanced_shipment_options = advanced_shipment_options = {}));
