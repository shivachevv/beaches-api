import { User } from 'src/database/models/user.model';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const createAccessToken = (user: User): string => {
  const tokenPayload = {
    user,
  };

  return jwt.sign(tokenPayload, `${process.env.ACCESS_JWT_SECRET}`, {
    expiresIn: process.env.ACCESS_JWT_LIFE,
  });
};
