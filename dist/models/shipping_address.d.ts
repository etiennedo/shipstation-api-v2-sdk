import type { address } from './address';
import type { partial_shipping_address } from './partial_shipping_address';
export type shipping_address = (address & partial_shipping_address);
