import type { label } from './label';
import type { shipment } from './shipment';
/**
 * A purchase label request body
 */
export type create_label_request_body = (label & {
    /**
     * The shipment information used to generate the label
     */
    shipment: shipment;
    /**
     * A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.
     */
    ship_to_service_point_id?: string;
    /**
     * A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.
     */
    ship_from_service_point_id?: string;
});
