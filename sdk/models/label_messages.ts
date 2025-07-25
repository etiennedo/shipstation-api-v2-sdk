/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.
 *
 * |Carrier            |Max lines |Max line length
 * |-------------------|----------|--------------------
 * |USPS (Stamps.com)  |3         |60
 * |FedEx              |3         |35 for the first line. 30 for additional lines.
 * |UPS                |2         |35
 * |OnTrac             |2         |25
 *
 */
export type label_messages = {
    /**
     * The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
     *
     */
    reference1: string;
    /**
     * The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
     *
     */
    reference2: string;
    /**
     * The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
     *
     */
    reference3: string;
};

