import { axiosRequest, getClientBaseUrl } from '@/app/lib/common';
import { ApiResponse, UserInfoProps } from '@/app/next-auth';

// Gets a user profile
export const getUserProfile = async (token?: string | null) => {
  const URL = `${getClientBaseUrl()}/auth/my-profile`;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  return axiosRequest.get<ApiResponse<UserInfoProps>>(URL, { headers });
};
