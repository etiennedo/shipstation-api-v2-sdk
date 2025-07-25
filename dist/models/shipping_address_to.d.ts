import type { address } from './address';
import type { partial_shipping_address_to } from './partial_shipping_address_to';
export type shipping_address_to = (address & partial_shipping_address_to);
