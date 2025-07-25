/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tracking status detail codes
 *
 * |Value       |Description
 * |:---------  |:-----------------------------------------------------
 * | `COLLECTION_FAILED` | Shipment pickup failed. The delivery company will try again soon.
 * | `AWAITING_DESPATCH` | Your shipment is ready to go and is waiting for pickup.
 * | `COLLECTION_REQUESTED` | Your shipment pickup has been scheduled.
 * | `DESPATCHED` | Your shipment has been handed over to the carrier or dropped off at collection point. It will soon start its journey.
 * | `ELEC_ADVICE_RECD_BY_CARRIER` | Your shipment is now in the carrier's system.
 * | `NOT_YET_RECEIVED_BY_CARRIER` | The sender couldn't hand over your shipment. The delivery company will try to collect it again.
 * | `COLLECTION_MADE` | Your shipment has been picked up by the carrier.
 * | `ATTEMPTED_DELIVERY` | Delivery attempt failed. Please check the carrier's instructions for next steps.
 * | `ATTEMPTED_DELIVERY_2ND` | Second delivery attempt failed. Please check the carrier's instructions for next steps.
 * | `ATTEMPTED_DELIVERY_3RD` | Third delivery attempt failed. Please check the carrier's instructions for next steps.
 * | `COD_AMOUNT_NOT_PAID` | Delivery failed due to unpaid cash on delivery. Please check carrier instructions.
 * | `COD_AMOUNT_PAID` | Cash on delivery payment received.
 * | `CUSTOMER_CARDED` | Delivery attempt failed. Please check for delivery instructions left by the carrier.
 * | `CUSTOMER_IDENTIFICATION_FAILED` | There was a recipient identification issue. Please check carrier instructions.
 * | `INVALID_METHOD_OF_PAYMENT` | Delivery failed due to incorrect payment. Please check carrier instructions.
 * | `NO_ACCESS_TO_RECIPIENTS_ADDRESS` | Delivery couldn't be completed due to issues with accessing address. Please follow carrier instructions.
 * | `OUT_FOR_DELIVERY` | Your shipment is out for delivery.
 * | `DELIVERED` | Your shipment has been delivered.
 * | `DELIVERED_DAMAGED` | Your shipment was delivered but arrived damaged.
 * | `DELIVERED_IN_PART` | Part of your shipment has been delivered. Check for updates on the rest.
 * | `DELIVERED_SPECIFIED_SAFE_PLACE` | Your shipment has been left in your designated safe place.
 * | `DELIVERED_TO_ALTERNATIVE_DELIVERY_LOCATION` | Your shipment was delivered to an alternative location due to the delivery company being unable to deliver it to the specified address. Check carrier instructions for pickup details.
 * | `DELIVERED_TO_NEIGHBOUR` | Your shipment was delivered to your neighbor.
 * | `DELIVERED_TO_PO_BOX` | Your shipment was delivered to your PO Box.
 * | `PARCEL_COLLECTED_FROM_PICKUP_POINT` | Your package has been picked up from the collection point.
 * | `POST_TRANSIT_STATUS` | The carrier has added more information about your delivery.
 * | `PROOF_OF_DELIVERY` | Delivery confirmed.
 * | `CANCELLED` | Your shipment has been cancelled.
 * | `CANCELLED_BEFORE_DESPATCH` | Your shipment was cancelled before pickup. Contact the sender if unexpected.
 * | `CUSTOMER_MOVED` | Recipient not at address. Your shipment is being returned.
 * | `HAZARDOUS_PROHIBITED` | Your parcel contained a prohibited item and is being returned. Contact the sender.
 * | `NOT_COLLECTED_FROM_PICKUP_POINT` | Shipment not collected from the pickup point. Your parcel is being returned to the sender.
 * | `NOT_DELIVERED` | Delivery attempts failed. Your parcel is being returned to the sender.
 * | `NOT_DELIVERED_ADDRESSEE_DECEASED` | Delivery not possible due to recipient's passing.
 * | `PARCEL_DAMAGED` | Your parcel was damaged and can't be delivered. It's being returned. Contact the sender.
 * | `PARCEL_DISPOSED` | Shipment was disposed of. Contact the sender for details.
 * | `PARCEL_LOST` | Your parcel is lost. Contact the sender for next steps.
 * | `PARCEL_OUTSIDE_OF_SERVICE_CAPABILITY` | Shipment is too large/heavy for delivery. Being returned. Contact sender.
 * | `REFUSED_BY_CUSTOMER` | Delivery refused. Shipment being returned. Contact the sender.
 * | `RETURN_TO_SENDER` | Your shipment is being returned to the sender. Contact them for details.
 * | `ADDRESS_QUERY` | There's an issue with your delivery address. This may cause a delay or return. Contact sender or carrier.
 * | `CARRIER_DELAYS` | There's a delivery delay. We'll update you when there's more info.
 * | `CUSTOMS_CLEARED` | Your shipment has passed customs clearance.
 * | `CUSTOMS_PROCESSING` | Your shipment is going through customs.
 * | `DELAYED_NOT_CARRIER` | Unexpected delivery delay. We'll update you soon.
 * | `DELIVERY_ARRANGED_WITH_RECIPIENT` | Delivery arranged by recipient.
 * | `HELD_BY_CARRIER` | Your shipment is on hold due to a carrier issue. We'll update you soon.
 * | `HELD_BY_CARRIER_FOR_CLEARANCE_PRE_PROCESSING` | Your shipment is held by carrier due to customs issues. We'll update you.
 * | `HELD_BY_CUSTOMS` | Your shipment is held in customs. We'll update you.
 * | `HELD_BY_EXPORT_CUSTOMS` | Your shipment is held in export customs. We'll update you.
 * | `HELD_BY_IMPORT_CUSTOMS` | Your shipment is held in import customs. We'll update you.
 * | `HUB_SCAN_OUT` | Your shipment is at the main delivery depot.
 * | `IN_TRANSIT` | Your shipment is on its way between depots.
 * | `INCORRECT_DECLARATION` | Incorrect shipment dimensions. Delivery may be delayed or returned. We'll update you.
 * | `INFORMATION` | The carrier has shared additional shipment information.
 * | `MISSORTED` | Your shipment was missorted. There might be a delivery delay. We'll update you.
 * | `PARCEL_OVER_LABELLED` | Your shipment was over labelled by the delivery company to improve processing.
 * | `PARCEL_REPACKED` | Your shipment packaging was damaged. It's being repacked. This might delay delivery.
 * | `PARCEL_UPDATE_NOTIFICATION_VIA_EMAIL` | You've received an email with a shipment update.
 * | `PARCEL_UPDATE_NOTIFICATION_VIA_SMS` | You've received a text message with a shipment update.
 * | `RECEIVED_BY_CARRIER` | Your shipment has been received by the carrier.
 * | `RECEIVED_LOCAL_DELIVERY_DEPOT` | Your shipment is at the local delivery depot, ready for delivery.
 * | `ROUTING_ERROR` | Your shipment was sent to the wrong place. There might be a delay.
 * | `SUB_CONTRACTOR_EVENT` | Your shipment is with the local delivery partner.
 * | `SUB_CONTRACTOR_RECEIVED` | Your shipment has been received by the local delivery partner.
 * | `RECD_BY_CARRIER_NO_ELEC_ADVICE` | There's a system issue with your shipment. Tracking updates might be delayed.
 * | `AWAITING_ELECTRONIC_ADVICE` | Your tracking number is ready. Your shipment is waiting to be registered in the carrier system and scheduled for pickup.
 * | `AWAITING_COLLECTION_FROM_PICKUP_POINT` | Your shipment is ready for pickup at the specified location.
 * | `COLLECT_AT_LOCAL_PO` | Your shipment has been redirected to the local post office for pickup. Check carrier instructions.
 * | `CUSTOMER_TO_COLLECT_FROM_CARRIER` | Your shipment is being held for pickup. Check carrier instructions.
 * | `DELIVERED_TO_LOCKER_COLLECTION_POINT` | Your shipment has been delivered to your locker.
 * | `CARRIER_STATUS_NOT_MAPPED` | Status not mapped. Please check the carrier's website for updates.
 *
 */
export enum tracking_status_detail_code {
    COLLECTION_FAILED = 'COLLECTION_FAILED',
    AWAITING_DESPATCH = 'AWAITING_DESPATCH',
    COLLECTION_REQUESTED = 'COLLECTION_REQUESTED',
    DESPATCHED = 'DESPATCHED',
    ELEC_ADVICE_RECD_BY_CARRIER = 'ELEC_ADVICE_RECD_BY_CARRIER',
    NOT_YET_RECEIVED_BY_CARRIER = 'NOT_YET_RECEIVED_BY_CARRIER',
    COLLECTION_MADE = 'COLLECTION_MADE',
    ATTEMPTED_DELIVERY = 'ATTEMPTED_DELIVERY',
    ATTEMPTED_DELIVERY_2ND = 'ATTEMPTED_DELIVERY_2ND',
    ATTEMPTED_DELIVERY_3RD = 'ATTEMPTED_DELIVERY_3RD',
    COD_AMOUNT_NOT_PAID = 'COD_AMOUNT_NOT_PAID',
    COD_AMOUNT_PAID = 'COD_AMOUNT_PAID',
    CUSTOMER_CARDED = 'CUSTOMER_CARDED',
    CUSTOMER_IDENTIFICATION_FAILED = 'CUSTOMER_IDENTIFICATION_FAILED',
    INVALID_METHOD_OF_PAYMENT = 'INVALID_METHOD_OF_PAYMENT',
    NO_ACCESS_TO_RECIPIENTS_ADDRESS = 'NO_ACCESS_TO_RECIPIENTS_ADDRESS',
    OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
    DELIVERED = 'DELIVERED',
    DELIVERED_DAMAGED = 'DELIVERED_DAMAGED',
    DELIVERED_IN_PART = 'DELIVERED_IN_PART',
    DELIVERED_SPECIFIED_SAFE_PLACE = 'DELIVERED_SPECIFIED_SAFE_PLACE',
    DELIVERED_TO_ALTERNATIVE_DELIVERY_LOCATION = 'DELIVERED_TO_ALTERNATIVE_DELIVERY_LOCATION',
    DELIVERED_TO_NEIGHBOUR = 'DELIVERED_TO_NEIGHBOUR',
    DELIVERED_TO_PO_BOX = 'DELIVERED_TO_PO_BOX',
    PARCEL_COLLECTED_FROM_PICKUP_POINT = 'PARCEL_COLLECTED_FROM_PICKUP_POINT',
    POST_TRANSIT_STATUS = 'POST_TRANSIT_STATUS',
    PROOF_OF_DELIVERY = 'PROOF_OF_DELIVERY',
    CANCELLED = 'CANCELLED',
    CANCELLED_BEFORE_DESPATCH = 'CANCELLED_BEFORE_DESPATCH',
    CUSTOMER_MOVED = 'CUSTOMER_MOVED',
    HAZARDOUS_PROHIBITED = 'HAZARDOUS_PROHIBITED',
    NOT_COLLECTED_FROM_PICKUP_POINT = 'NOT_COLLECTED_FROM_PICKUP_POINT',
    NOT_DELIVERED = 'NOT_DELIVERED',
    NOT_DELIVERED_ADDRESSEE_DECEASED = 'NOT_DELIVERED_ADDRESSEE_DECEASED',
    PARCEL_DAMAGED = 'PARCEL_DAMAGED',
    PARCEL_DISPOSED = 'PARCEL_DISPOSED',
    PARCEL_LOST = 'PARCEL_LOST',
    PARCEL_OUTSIDE_OF_SERVICE_CAPABILITY = 'PARCEL_OUTSIDE_OF_SERVICE_CAPABILITY',
    REFUSED_BY_CUSTOMER = 'REFUSED_BY_CUSTOMER',
    RETURN_TO_SENDER = 'RETURN_TO_SENDER',
    ADDRESS_QUERY = 'ADDRESS_QUERY',
    CARRIER_DELAYS = 'CARRIER_DELAYS',
    CUSTOMS_CLEARED = 'CUSTOMS_CLEARED',
    CUSTOMS_PROCESSING = 'CUSTOMS_PROCESSING',
    DELAYED_NOT_CARRIER = 'DELAYED_NOT_CARRIER',
    DELIVERY_ARRANGED_WITH_RECIPIENT = 'DELIVERY_ARRANGED_WITH_RECIPIENT',
    HELD_BY_CARRIER = 'HELD_BY_CARRIER',
    HELD_BY_CARRIER_FOR_CLEARANCE_PRE_PROCESSING = 'HELD_BY_CARRIER_FOR_CLEARANCE_PRE_PROCESSING',
    HELD_BY_CUSTOMS = 'HELD_BY_CUSTOMS',
    HELD_BY_EXPORT_CUSTOMS = 'HELD_BY_EXPORT_CUSTOMS',
    HELD_BY_IMPORT_CUSTOMS = 'HELD_BY_IMPORT_CUSTOMS',
    HUB_SCAN_OUT = 'HUB_SCAN_OUT',
    IN_TRANSIT = 'IN_TRANSIT',
    INCORRECT_DECLARATION = 'INCORRECT_DECLARATION',
    INFORMATION = 'INFORMATION',
    MISSORTED = 'MISSORTED',
    PARCEL_OVER_LABELLED = 'PARCEL_OVER_LABELLED',
    PARCEL_REPACKED = 'PARCEL_REPACKED',
    PARCEL_UPDATE_NOTIFICATION_VIA_EMAIL = 'PARCEL_UPDATE_NOTIFICATION_VIA_EMAIL',
    PARCEL_UPDATE_NOTIFICATION_VIA_SMS = 'PARCEL_UPDATE_NOTIFICATION_VIA_SMS',
    RECEIVED_BY_CARRIER = 'RECEIVED_BY_CARRIER',
    RECEIVED_LOCAL_DELIVERY_DEPOT = 'RECEIVED_LOCAL_DELIVERY_DEPOT',
    ROUTING_ERROR = 'ROUTING_ERROR',
    SUB_CONTRACTOR_EVENT = 'SUB_CONTRACTOR_EVENT',
    SUB_CONTRACTOR_RECEIVED = 'SUB_CONTRACTOR_RECEIVED',
    RECD_BY_CARRIER_NO_ELEC_ADVICE = 'RECD_BY_CARRIER_NO_ELEC_ADVICE',
    AWAITING_ELECTRONIC_ADVICE = 'AWAITING_ELECTRONIC_ADVICE',
    AWAITING_COLLECTION_FROM_PICKUP_POINT = 'AWAITING_COLLECTION_FROM_PICKUP_POINT',
    COLLECT_AT_LOCAL_PO = 'COLLECT_AT_LOCAL_PO',
    CUSTOMER_TO_COLLECT_FROM_CARRIER = 'CUSTOMER_TO_COLLECT_FROM_CARRIER',
    DELIVERED_TO_LOCKER_COLLECTION_POINT = 'DELIVERED_TO_LOCKER_COLLECTION_POINT',
    CARRIER_STATUS_NOT_MAPPED = 'CARRIER_STATUS_NOT_MAPPED',
}
