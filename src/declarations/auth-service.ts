import { User } from 'src/database/models/user.model';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type RefreshSessionPayload = {
  refreshToken: string;
  email: string;
};

export type RefreshSessionResponse = {
  accessToken: string;
};

export interface AuthServiceInterface {
  login(payload: LoginPayload): Promise<LoginResponse>;
  refreshSession(
    payload: RefreshSessionPayload
  ): Promise<RefreshSessionResponse>;
}
