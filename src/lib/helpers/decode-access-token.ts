import jwt from 'jsonwebtoken';
require('dotenv').config();

export const decodeAccessToken = (assessToken: string) => {
  return jwt.verify(assessToken, `${process.env.ACCESS_JWT_SECRET}`);
};
