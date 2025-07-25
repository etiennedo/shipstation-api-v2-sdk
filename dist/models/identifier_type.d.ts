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
export declare enum identifier_type {
    VAT = "vat",
    EORI = "eori",
    SSN = "ssn",
    EIN = "ein",
    TIN = "tin",
    IOSS = "ioss",
    PAN = "pan",
    VOEC = "voec",
    PCCC = "pccc",
    OSS = "oss",
    PASSPORT = "passport",
    ABN = "abn",
    UKIMS = "ukims"
}
