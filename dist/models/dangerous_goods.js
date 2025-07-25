"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dangerous_goods = void 0;
var dangerous_goods;
(function (dangerous_goods) {
    let packaging_group;
    (function (packaging_group) {
        packaging_group["I"] = "i";
        packaging_group["II"] = "ii";
        packaging_group["III"] = "iii";
    })(packaging_group = dangerous_goods.packaging_group || (dangerous_goods.packaging_group = {}));
    let packaging_instruction_section;
    (function (packaging_instruction_section) {
        packaging_instruction_section["SECTION_1"] = "section_1";
        packaging_instruction_section["SECTION_2"] = "section_2";
        packaging_instruction_section["SECTION_1A"] = "section_1a";
        packaging_instruction_section["SECTION_1B"] = "section_1b";
    })(packaging_instruction_section = dangerous_goods.packaging_instruction_section || (dangerous_goods.packaging_instruction_section = {}));
    let transport_mean;
    (function (transport_mean) {
        transport_mean["GROUND"] = "ground";
        transport_mean["WATER"] = "water";
        transport_mean["CARGO_AIRCRAFT_ONLY"] = "cargo_aircraft_only";
        transport_mean["PASSENGER_AIRCRAFT"] = "passenger_aircraft";
    })(transport_mean = dangerous_goods.transport_mean || (dangerous_goods.transport_mean = {}));
    let regulation_level;
    (function (regulation_level) {
        regulation_level["LIGHTLY_REGULATED"] = "lightly_regulated";
        regulation_level["FULLY_REGULATED"] = "fully_regulated";
        regulation_level["LIMITED_QUANTITIES"] = "limited_quantities";
        regulation_level["EXCEPTED_QUANTITY"] = "excepted_quantity";
    })(regulation_level = dangerous_goods.regulation_level || (dangerous_goods.regulation_level = {}));
})(dangerous_goods || (exports.dangerous_goods = dangerous_goods = {}));
