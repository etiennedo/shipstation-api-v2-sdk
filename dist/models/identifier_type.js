"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifier_type = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Tax identifier type for customs declaration
 *
 * |Pickup Type    | Description
 * |---------------|-----------------------------------------
 * |`vat`          | The tax identifier is a Value Added Tax.
 * |`eori`         | The tax identifier is an Economic Operators Registration and Identification Number (EORI).
 * |`ssn`          | The tax identifier is a Social Security Number.
 * |`ein`          | The tax identifier is an Employer Identification Number (EIN).
 * |`tin`          | The tax identifier is a Tax Identification Number (TIN).
 * |`ioss`         | The tax identifier is an Import One-Stop Shop (IOSS).
 * |`pan`          | The tax identifier is a Permanent Account Number (PAN).
 * |`voec`         | The tax identifier is a Norwegian VAT On E-Commerce(VOEC).
 * |`pccc`         | The tax identifier is a Personal Customs Clearance Code (PCCC).
 * |`oss`          | The tax identifier is an One-Stop Shop (OSS).
 * |`passport`     | The tax identifier is a Passport Number.
 * |`abn`          | The tax identifier is an Australian Business Number.
 * |`ukims`        | The tax identifier is an UK Internal Market Scheme number.
 *
 */
var identifier_type;
(function (identifier_type) {
    identifier_type["VAT"] = "vat";
    identifier_type["EORI"] = "eori";
    identifier_type["SSN"] = "ssn";
    identifier_type["EIN"] = "ein";
    identifier_type["TIN"] = "tin";
    identifier_type["IOSS"] = "ioss";
    identifier_type["PAN"] = "pan";
    identifier_type["VOEC"] = "voec";
    identifier_type["PCCC"] = "pccc";
    identifier_type["OSS"] = "oss";
    identifier_type["PASSPORT"] = "passport";
    identifier_type["ABN"] = "abn";
    identifier_type["UKIMS"] = "ukims";
})(identifier_type || (exports.identifier_type = identifier_type = {}));
