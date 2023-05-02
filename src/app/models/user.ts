import { PromoCode } from "./promocode";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    photo: string;
    phoneNumber: number;
    email: string;
    username: string;
    password: string;
    isActive: boolean;
    accountStatus: AccountStatus;
    promoCode: PromoCode[];
  }
  
  export enum AccountStatus {
    Online = 'Online',
    Away = 'Away',
    Offline = 'Offline'
  }