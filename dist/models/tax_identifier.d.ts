import type { identifier_type } from './identifier_type';
import type { taxable_entity_type } from './taxable_entity_type';
/**
 * A tax identifier object
 */
export type tax_identifier = {
    taxable_entity_type: taxable_entity_type;
    identifier_type: identifier_type;
    /**
     * The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.
     */
    issuing_authority: string;
    /**
     * The value of the identifier
     */
    value: string;
};
