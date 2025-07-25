"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address_validation_detail_code = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The detailed error codes that can be returned by the address validation API
 */
var address_validation_detail_code;
(function (address_validation_detail_code) {
    address_validation_detail_code["UNSUPPORTED_COUNTRY"] = "unsupported_country";
    address_validation_detail_code["NON_SUPPORTED_COUNTRY"] = "non_supported_country";
    address_validation_detail_code["MINIMUM_POSTAL_CODE_VERIFICATION_FAILED"] = "minimum_postal_code_verification_failed";
    address_validation_detail_code["STREET_DOES_NOT_MATCH_UNIQUE_STREET_NAME"] = "street_does_not_match_unique_street_name";
    address_validation_detail_code["MULTIPLE_DIRECTIONALS"] = "multiple_directionals";
    address_validation_detail_code["MULTIPLE_MATCHES"] = "multiple_matches";
    address_validation_detail_code["SUITE_NOT_VALID"] = "suite_not_valid";
    address_validation_detail_code["SUITE_MISSING"] = "suite_missing";
    address_validation_detail_code["INCOMPATIBLE_PAIRED_LABELS"] = "incompatible_paired_labels";
    address_validation_detail_code["INVALID_HOUSE_NUMBER"] = "invalid_house_number";
    address_validation_detail_code["MISSING_HOUSE_NUMBER"] = "missing_house_number";
    address_validation_detail_code["INVALID_BOX_NUMBER"] = "invalid_box_number";
    address_validation_detail_code["INVALID_CHARGE_EVENT"] = "invalid_charge_event";
    address_validation_detail_code["MISSING_BOX_NUMBER"] = "missing_box_number";
    address_validation_detail_code["MISSING_CMRA_OR_PRIVATE_MAIL_BOX_NUMBER"] = "missing_cmra_or_private_mail_box_number";
    address_validation_detail_code["SUITE_HAS_NO_SECONDARIES"] = "suite_has_no_secondaries";
    address_validation_detail_code["POSTAL_CODE_CHANGED_OR_ADDED"] = "postal_code_changed_or_added";
    address_validation_detail_code["STATE_PROVINCE_CHANGED_OR_ADDED"] = "state_province_changed_or_added";
    address_validation_detail_code["CITY_LOCALITY_CHANGED_OR_ADDED"] = "city_locality_changed_or_added";
    address_validation_detail_code["URBANIZATION_CHANGED"] = "urbanization_changed";
    address_validation_detail_code["STREET_NAME_SPELLING_CHANGED_OR_ADDED"] = "street_name_spelling_changed_or_added";
    address_validation_detail_code["STREET_NAME_TYPE_CHANGED_OR_ADDED"] = "street_name_type_changed_or_added";
    address_validation_detail_code["STREET_DIRECTION_CHANGED_OR_ADDED"] = "street_direction_changed_or_added";
    address_validation_detail_code["SUITE_TYPE_CHANGED_OR_ADDED"] = "suite_type_changed_or_added";
    address_validation_detail_code["SUITE_UNIT_NUMBER_CHANGED_OR_ADDED"] = "suite_unit_number_changed_or_added";
    address_validation_detail_code["DOUBLE_DEPENDENT_LOCALITY_CHANGED_OR_ADDED"] = "double_dependent_locality_changed_or_added";
    address_validation_detail_code["SUBADMINISTRATIVE_AREA_CHANGED_OR_ADDED"] = "subadministrative_area_changed_or_added";
    address_validation_detail_code["SUBNATIONAL_AREA_CHANGED_OR_ADDED"] = "subnational_area_changed_or_added";
    address_validation_detail_code["PO_BOX_CHANGED_OR_ADDED"] = "po_box_changed_or_added";
    address_validation_detail_code["PREMISE_TYPE_CHANGED_OR_ADDED"] = "premise_type_changed_or_added";
    address_validation_detail_code["HOUSE_NUMBER_CHANGED"] = "house_number_changed";
    address_validation_detail_code["ORGANIZATION_CHANGED_OR_ADDED"] = "organization_changed_or_added";
    address_validation_detail_code["PARTIALLY_VERIFIED_TO_STATE_LEVEL"] = "partially_verified_to_state_level";
    address_validation_detail_code["PARTIALLY_VERIFIED_TO_CITY_LEVEL"] = "partially_verified_to_city_level";
    address_validation_detail_code["PARTIALLY_VERIFIED_TO_STREET_LEVEL"] = "partially_verified_to_street_level";
    address_validation_detail_code["PARTIALLY_VERIFIED_TO_PREMISE_LEVEL"] = "partially_verified_to_premise_level";
    address_validation_detail_code["VERIFIED_TO_STATE_LEVEL"] = "verified_to_state_level";
    address_validation_detail_code["VERIFIED_TO_CITY_LEVEL"] = "verified_to_city_level";
    address_validation_detail_code["VERIFIED_TO_STREET_LEVEL"] = "verified_to_street_level";
    address_validation_detail_code["VERIFIED_TO_PREMISE_LEVEL"] = "verified_to_premise_level";
    address_validation_detail_code["VERIFIED_TO_SUITE_LEVEL"] = "verified_to_suite_level";
    address_validation_detail_code["CODED_TO_STREET_LAVEL"] = "coded_to_street_lavel";
    address_validation_detail_code["CODED_TO_NEIGHBORHOOD_LEVEL"] = "coded_to_neighborhood_level";
    address_validation_detail_code["CODED_TO_COMMUNITY_LEVEL"] = "coded_to_community_level";
    address_validation_detail_code["CODED_TO_STATE_LEVEL"] = "coded_to_state_level";
    address_validation_detail_code["CODED_TO_ROOFTOP_LEVEL"] = "coded_to_rooftop_level";
    address_validation_detail_code["CODED_TO_ROOFTOP_INTERPOLATION_LEVEL"] = "coded_to_rooftop_interpolation_level";
    address_validation_detail_code["NAME_MAX_LENGTH_EXCEEDED"] = "name_max_length_exceeded";
    address_validation_detail_code["PHONE_MAX_LENGTH_EXCEEDED"] = "phone_max_length_exceeded";
    address_validation_detail_code["COMPANY_NAME_MAX_LENGTH_EXCEEDED"] = "company_name_max_length_exceeded";
    address_validation_detail_code["LINE1_MIN_MAX_LENGTH"] = "line1_min_max_length";
    address_validation_detail_code["LINE2_MAX_LENGTH_EXCEEDED"] = "line2_max_length_exceeded";
    address_validation_detail_code["LINE3_MAX_LENGTH_EXCEEDED"] = "line3_max_length_exceeded";
    address_validation_detail_code["CITY_LOCALITY_MAX_LENGTH_EXCEEDED"] = "city_locality_max_length_exceeded";
    address_validation_detail_code["STATE_PROVINCE_MAX_LENGTH_EXCEEDED"] = "state_province_max_length_exceeded";
    address_validation_detail_code["INVALID_POSTAL_CODE"] = "invalid_postal_code";
    address_validation_detail_code["COUNTRY_INVALID_LENGTH"] = "country_invalid_length";
    address_validation_detail_code["ADDRESS_NOT_FOUND"] = "address_not_found";
})(address_validation_detail_code || (exports.address_validation_detail_code = address_validation_detail_code = {}));
