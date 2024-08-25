import { cache } from 'react';

export const getBaseUrl = cache(() => process.env.NEXT_API);
export const getClientBaseUrl = cache(() => process.env.BASE_URL);
