export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  userType: 'farmer' | 'customer' | 'admin';
  balance: number;
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}