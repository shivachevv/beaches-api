import { User } from 'src/database/models/user.model';
import bcryptjs from 'bcryptjs';
require('dotenv').config();

export const createHashedPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcryptjs.genSalt(Number(process.env.SALT_ROUNDS));

  return await bcryptjs.hash(password, salt);
};
