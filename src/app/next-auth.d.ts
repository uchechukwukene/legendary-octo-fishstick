// next-auth.d.ts
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface UserInfoProps {
  id: string;
  name: string;
  email: string;
  image?: string;
  access_token: string; // Custom property
}

// Extend the default session type with custom properties
declare module 'next-auth' {
  interface Session {
    user: UserInfoProps;
    access_token: string; // Custom property
    expires: string; // Ensure the expiration date is included
  }
}

// Extend the JWT type to include custom properties
declare module 'next-auth/jwt' {
  interface JWT {
    user: UserInfoProps;
    access_token: string; // Custom property
  }
}
