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
