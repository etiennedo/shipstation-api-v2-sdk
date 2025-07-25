import type { url } from './url';
/**
 * A link to a related resource, or an empty object if there is no resource to link to
 */
export type optional_link = {
    /**
     * The URL of the linked resource, if any
     */
    href?: url;
    /**
     * The type of resource, or the type of relationship to the parent resource
     */
    type?: string;
};
