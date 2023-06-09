import { AllOptionalExceptFor, BoomUser, BoomUserBasic } from '@boom-platform/globals';
import { Booking } from '../models';
export interface FailedBookingPurchase {
    booking: Booking;
    reason: string;
}
export interface PurchaseResult {
    customer: AllOptionalExceptFor<BoomUser, 'uid'> | null;
    customerEmail: string | null | undefined;
    success: boolean;
    message: string;
    checkedOut?: Booking[];
    failed?: FailedBookingPurchase[];
    expired?: Booking[];
}
export declare const senderHasUID: (item: BoomUserBasic | any) => item is BoomUserBasic;
