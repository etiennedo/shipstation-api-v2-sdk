/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dimensions } from './dimensions';
import type { label_download } from './label_download';
import type { label_messages } from './label_messages';
import type { monetary_value } from './monetary_value';
import type { optional_link } from './optional_link';
import type { package_code } from './package_code';
import type { paperless_download } from './paperless_download';
import type { tracking_number } from './tracking_number';
import type { weight } from './weight';
/**
 * A package returned in the response from creating a [shipping label]
 *
 */
export type label_package = {
    /**
     * The shipment package id
     */
    readonly package_id?: number;
    /**
     * The [package type], such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     *
     */
    package_code?: package_code;
    /**
     * The package weight
     */
    weight: weight;
    /**
     * The package dimensions
     */
    dimensions?: dimensions;
    /**
     * The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
     *
     */
    insured_value?: monetary_value;
    /**
     * The tracking number for the package.  The format depends on the carrier.
     *
     */
    readonly tracking_number?: tracking_number;
    /**
     * The label download for the package
     */
    readonly label_download?: label_download;
    /**
     * The form download for any customs that are needed
     */
    readonly form_download?: optional_link;
    /**
     * The QR code download for the package
     */
    readonly qr_code_download?: optional_link;
    /**
     * The paperless details which may contain elements like `href`, `instructions` and `handoff_code`.
     */
    readonly paperless_download?: paperless_download;
    label_messages?: label_messages;
    /**
     * An external package id.
     */
    external_package_id?: string;
    /**
     * A short description of the package content. Required for shipments moving to, from, and through Mexico.
     *
     */
    content_description?: string;
    /**
     * Package sequence
     */
    readonly sequence?: number;
    /**
     * Whether the package has label documents available for download
     */
    has_label_documents?: boolean;
    /**
     * Whether the package has form documents available for download
     */
    has_form_documents?: boolean;
    /**
     * Whether the package has QR code documents available for download
     */
    has_qr_code_documents?: boolean;
    /**
     * Whether the package has paperless documents available for download
     */
    has_paperless_label_documents?: boolean;
};

