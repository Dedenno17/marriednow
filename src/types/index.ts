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
