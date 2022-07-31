import jwt from 'jsonwebtoken';
require('dotenv').config();

export const decodeRefreshToken = (refreshToken: string) => {
  return jwt.verify(refreshToken, `${process.env.REFRESH_JWT_SECRET}`);
};
