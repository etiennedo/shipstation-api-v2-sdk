import type { optional_link } from './optional_link';
import type { url } from './url';
/**
 * A link to a related resource
 */
export type link = (optional_link & {
    /**
     * The URL of the linked resource, if any
     */
    href: url;
});
