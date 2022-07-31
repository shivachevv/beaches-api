import { User } from 'src/database/models/user.model';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const createRefreshToken = (user: User): string => {
  const tokenPayload = {
    email: user.email,
  };

  return jwt.sign(tokenPayload, `${process.env.REFRESH_JWT_SECRET}`, {
    expiresIn: process.env.REFRESH_JWT_LIFE,
  });
};
