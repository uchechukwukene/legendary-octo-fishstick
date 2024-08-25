import { axiosRequest, getBaseUrl } from '@/app/lib/common';
import { ApiResponse } from '@/app/next-auth';
import * as Yup from 'yup';

// Form Validator schema
export interface SigninFormSchema {
  email: string;
  password: string;
  rememberLogin?: boolean;
}

// Response from a successful sign in
export interface SignInAPIResponse {
  tokenEncryption: string;
}

// Form validation schema
export const signInSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

// User sign in request
export const signInUser = async (userData: SigninFormSchema) => {
  const URL = `${getBaseUrl()}/auth/organization-login`;
  return axiosRequest.post<ApiResponse<SignInAPIResponse>>(URL, {
    contact: userData.email,
    password: userData.password,
  });
};
