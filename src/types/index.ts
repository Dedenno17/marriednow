// INTERFACE USER
export interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  address: {
    street: string;
    city: string;
    country: string;
    zipCode: null | number;
  };
  phone: null | number;
  createdAt: string;
  updatedAt: string;
}

// INTERFACE THEME
export interface Theme {
  _id: string;
  title: string;
  image: string;
  category: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
}
export interface ThemeResponse {
  data: [];
  limit: number;
  page: number;
  total: number;
}

// INTERFACE CATEGORY
export interface Category {
  _id: string;
  title: string;
}
export interface CategoryResponse {
  data: Category[];
  limit: number;
  page: number;
  total: number;
}

export interface LoveGift {
  bank_name: string;
  account_name: string;
  account_number: string;
}

export interface CoupleData {
  bride_data: {
    full_name: string;
    nick_name: string;
    fathers_name: string;
    mothers_name: string;
    birth_order: number | null;
    instagram_account: string;
    wa_number: string;
    photo: string | null;
  };
  groom_data: {
    full_name: string;
    nick_name: string;
    fathers_name: string;
    mothers_name: string;
    birth_order: number | null;
    instagram_account: string;
    wa_number: string;
    photo: string | null;
  };
  marriage_settlement_date: any;
  marriage_settlement_time: string;
  marriage_settlement_location: string;
  marriage_settlement_link_maps: string;
  marriage_reception_date: any;
  marriage_reception_time: string;
  marriage_reception_location: string;
  marriage_reception_link_maps: string;
  love_gift_1: LoveGift;
  love_gift_2: LoveGift;
  backsound: string;
  wedding_photo: any[];
}

// RESPONSE CREATE COUPLES
export interface coupleResponse {
  bride_data: {
    full_name: string;
    nick_name: string;
    fathers_name: string;
    mothers_name: string;
    birth_order: number | null;
    wa_number: number | null;
    instagram_account: string;
    photo: string;
  };
  groom_data: {
    full_name: string;
    nick_name: string;
    fathers_name: string;
    mothers_name: string;
    birth_order: number | null;
    wa_number: number | null;
    instagram_account: string;
    photo: string;
  };
  marriage_settlement_date: string;
  marriage_settlement_time: string;
  marriage_settlement_location: string;
  marriage_settlement_link_maps: string;
  marriage_reception_date: string;
  marriage_reception_time: string;
  marriage_reception_location: string;
  marriage_reception_link_maps: string;
  love_gift_1: LoveGift | null;
  love_gift_2: LoveGift | null;
  backsound: string;
  wedding_photo: string[];
}
