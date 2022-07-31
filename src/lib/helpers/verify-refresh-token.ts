import { decodeRefreshToken } from './decode-refresh-token';
require('dotenv').config();

export const verifyRefresh = (email: string, refreshToken: string): boolean => {
  const decoded = decodeRefreshToken(refreshToken);

  if (typeof decoded !== 'object') {
    return false;
  }

  return decoded?.email === email;
};
